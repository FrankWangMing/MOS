const fs = require('fs')
const path = require('path')
const { NodeSSH } = require('node-ssh')

const ssh = new NodeSSH()

ssh.connect({
  host: '10.0.1.89',
  username: 'root',
  //   privateKey: '/home/steel/.ssh/id_rsa'
  password: 'yskj2407'
})
  /*
   Or
   ssh.connect({
     host: 'localhost',
     username: 'steel',
     privateKey: fs.readFileSync('/home/steel/.ssh/id_rsa', 'utf8')
   })
   if you want to use the raw string as private key
   */
  .then(function () {
    // Local, Remote
    //   ssh.putFile('../../dist', '/home/steel/Lab/remotePath/fileName').then(function() {
    //     console.log("The File thing is done")
    //   }, function(error) {
    //     console.log("Something's wrong")
    //     console.log(error)
    //   })
    // Array<Shape('local' => string, 'remote' => string)>
    //   ssh.putFiles([{ local: '/home/steel/Lab/localPath/fileName', remote: '/home/steel/Lab/remotePath/fileName' }]).then(function() {
    //     console.log("The File thing is done")
    //   }, function(error) {
    //     console.log("Something's wrong")
    //     console.log(error)
    //   })
    //   // Local, Remote
    //   ssh.getFile('/home/steel/Lab/localPath', '/home/steel/Lab/remotePath').then(function(Contents) {
    //     console.log("The File's contents were successfully downloaded")
    //   }, function(error) {
    //     console.log("Something's wrong")
    //     console.log(error)
    //   })
    // Putting entire directories
    const failed = []
    const successful = []
    ssh.putDirectory(__dirname + '/../../dist', '/home/wangming/deploy-hgt', {
      recursive: true,
      concurrency: 10,
      // ^ WARNING: Not all servers support high concurrency
      // try a bunch of values and see what works on your server
      validate: function (itemPath) {
        const baseName = path.basename(itemPath)
        return baseName.substr(0, 1) !== '.' && // do not allow dot files
          baseName !== 'node_modules' // do not allow node_modules
      },
      tick: function (localPath, remotePath, error) {
        console.log(remotePath)
        if (error) {
          failed.push(localPath)
        } else {
          successful.push(localPath)
        }
      }
    }).then(function (status) {
      console.log(status ? '部署成功' : '部署失败')
      process.exit()
    })
    // Command
    // ssh.execCommand('hh_client --json', { cwd: '/var/www' }).then(function (result) {
    //     console.log('STDOUT: ' + result.stdout)
    //     console.log('STDERR: ' + result.stderr)
    // })
    // // Command with escaped params
    // ssh.exec('hh_client', ['--json'], { cwd: '/var/www', stream: 'stdout', options: { pty: true } }).then(function (result) {
    //     console.log('STDOUT: ' + result)
    // })
    // // With streaming stdout/stderr callbacks
    // ssh.exec('hh_client', ['--json'], {
    //     cwd: '/var/www',
    //     onStdout(chunk) {
    //         console.log('stdoutChunk', chunk.toString('utf8'))
    //     },
    //     onStderr(chunk) {
    //         console.log('stderrChunk', chunk.toString('utf8'))
    //     },
    // })
  })