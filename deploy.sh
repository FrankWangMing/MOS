echo "构建API"
cd ./api
export version="v0.2"
docker build -t wangming19980219/mos-api .
# docker pull wangming19980219/mos-fe:$version


echo "开启API"
docker run -it -v /var/www/html:/var/www/html -p 6657:3000 wangming19980219/mos-api bin/bash


cd ../fe
echo "构建FE"
docker build -t wangming19980219/mos-fe .

echo "开启FE"
docker run -itd wangming19980219/mos-fe

