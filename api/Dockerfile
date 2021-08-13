# FROM nginx

# COPY ./dist  /usr/share/nginx/html
# COPY ./src/config/nginx.conf   /etc/nginx

# EXPOSE 80

FROM hub.c.163.com/library/node:slim  

RUN yarn config set registry https://registry.npm.taobao.org
RUN npm install -g n
RUN n latest
RUN yarn config set ignore-engines true

WORKDIR /workspace
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn 
# --frozen-lockfile

ARG GIT_SHA1="1.01"
ENV VERSION=$GIT_SHA1

COPY ./ /workspace/
RUN yarn build


ARG GIT_SHA1=""
ENV VERSION=$GIT_SHA1

COPY ./docker-start.sh /

EXPOSE 80
CMD ["/bin/sh", "/docker-start.sh"]
