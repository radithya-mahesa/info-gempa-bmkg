FROM node:20-alpine

WORKDIR /app

COPY *.json .

RUN npm i

COPY . .

CMD [ "node", "index.js" ]
