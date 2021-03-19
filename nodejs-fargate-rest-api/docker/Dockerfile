FROM node:12.18.2-alpine

WORKDIR /usr/app

RUN npm install -g pm2

ADD package.json ./
ADD package-lock.json ./

RUN npm install

ADD . ./

RUN npm run rebuild

WORKDIR /usr/app/dist

EXPOSE 3000

CMD [ "pm2-runtime", "index.js" ]
