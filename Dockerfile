FROM node:lts-alpine3.9
WORKDIR /client
COPY package.json /client
RUN npm install -g pm2
RUN npm install -g nodemon
COPY . /client
