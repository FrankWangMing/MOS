# FROM nginx

# COPY ./dist  /usr/share/nginx/html
# COPY ./src/config/nginx.conf   /etc/nginx

# EXPOSE 80

FROM hub.c.163.com/library/node:slim  

# RUN yarn config set registry https://registry.npm.taobao.org
RUN npm install -g n
RUN n latest
RUN yarn config set ignore-engines true
RUN yarn global add pm2

# WORKDIR /workspace
# COPY ./package.json .
# COPY ./yarn.lock .
# RUN yarn 
# --frozen-lockfile

COPY ./dist /mosApi/dist
COPY ./package.json /mosApi/package.json
COPY ./ormconfig.json /mosApi/ormconfig.json
COPY ./node_modules /mosApi/node_modules
# RUN yarn build

COPY ./docker-start.sh /

EXPOSE 3000

CMD ["sh", "/docker-start.sh"]
