cd api
export version="v0.2"
docker build -t wangming19980219/mos-fe:$version .
docker pull wangming19980219/mos-fe:$version