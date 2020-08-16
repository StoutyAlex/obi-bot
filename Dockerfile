FROM node:12.16.3-alpine

RUN apk add  --no-cache ffmpeg
RUN npm i node-gyp

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
