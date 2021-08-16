cd api
export version="v0.2"
docker build -t wangming19980219/mos-fe:$version .
docker pull wangming19980219/mos-fe:$version


echo "开启api"
docker run -it -v /var/www/html:/var/www/html -p 6657:3000 wangming19980219/mos-api:v1 bin/bash