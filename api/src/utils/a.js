/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-05 09:43:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 17:32:41
 */

const _ = require('lodash');

const arr = [
  ['dist', 'config', 'server.d.ts'],
  ['dist', 'config', 'server.js'],
  ['dist', 'config', 'server.js.map'],
  ['dist', 'src', 'app.controller.d.ts'],
  ['dist', 'src', 'app.controller.js'],
  ['dist', 'src', 'app.controller.js.map'],
  // ['dist', 'src', 'app.module.d.ts'],
  // ['dist', 'src', 'app.module.js'],
  // ['dist', 'src', 'app.module.js.map'],
  // ['dist', 'src', 'app.service.d.ts'],
  // ['dist', 'src', 'app.service.js'],
  // ['dist', 'src', 'app.service.js.map'],
  // ['dist', 'src', 'fileserver', 'dto', 'create-fileserver.dto.d.ts'],
  // ['dist', 'src', 'fileserver', 'dto', 'create-fileserver.dto.js'],
  // ['dist', 'src', 'fileserver', 'dto', 'create-fileserver.dto.js.map'],
  // ['dist', 'src', 'fileserver', 'dto', 'update-fileserver.dto.d.ts'],
  // ['dist', 'src', 'fileserver', 'dto', 'update-fileserver.dto.js'],
  // ['dist', 'src', 'fileserver', 'dto', 'update-fileserver.dto.js.map'],
  // ['dist', 'src', 'fileserver', 'entities', 'fileserver.entity.d.ts'],
  // ['dist', 'src', 'fileserver', 'entities', 'fileserver.entity.js'],
  // ['dist', 'src', 'fileserver', 'entities', 'fileserver.entity.js.map'],
  // ['dist', 'src', 'fileserver', 'file.d.ts'],
  // ['dist', 'src', 'fileserver', 'file.js'],
  // ['dist', 'src', 'fileserver', 'file.js.map'],
  // ['dist', 'src', 'fileserver', 'fileserver.controller.d.ts'],
  // ['dist', 'src', 'fileserver', 'fileserver.controller.js'],
  // ['dist', 'src', 'fileserver', 'fileserver.controller.js.map'],
  // ['dist', 'src', 'fileserver', 'fileserver.module.d.ts'],
  // ['dist', 'src', 'fileserver', 'fileserver.module.js'],
  // ['dist', 'src', 'fileserver', 'fileserver.module.js.map'],
  // ['dist', 'src', 'fileserver', 'fileserver.service.d.ts'],
  // ['dist', 'src', 'fileserver', 'fileserver.service.js'],
  // ['dist', 'src', 'fileserver', 'fileserver.service.js.map'],
  // ['dist', 'src', 'main.d.ts'],
  // ['dist', 'src', 'main.js'],
  // ['dist', 'src', 'main.js.map'],
  // ['dist', 'src', 'utils', 'file.d.ts'],
  // ['dist', 'src', 'utils', 'file.js'],
  // ['dist', 'src', 'utils', 'file.js.map'],
  // ['dist', 'tsconfig.build.tsbuildinfo'],
];

const result = [];
arr.forEach((item) => {
  item.map((value, index) => {
    let obj = { title: value, children: [] };
    findPath(obj, index, result, item);
  });
});

function findPath(obj, index, result, item) {
  if (result.length == 0) {
    result.push(obj);
    return;
  }
  let arrr = result;
  for (let i = 0; i < index; i++) {
    arrr = arrr.filter((_item) => _item.title == item[i])[0].children;
  }
  arrr.filter((_item) => _item.title == obj.title).length == 0 &&
    arrr.push(obj);
}
console.log(JSON.stringify(result));
