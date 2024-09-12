FROM node:20-alpine

WORKDIR /app

COPY *.json .

RUN npm install

COPY . .

EXPOSE 7000

CMD [ "node", "index.js" ]
