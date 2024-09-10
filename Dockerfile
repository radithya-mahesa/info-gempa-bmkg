FROM node:20-alpine

WORKDIR /app

COPY *.json .

RUN npm install -y

COPY . .

CMD [ "node", "index.js" ]
