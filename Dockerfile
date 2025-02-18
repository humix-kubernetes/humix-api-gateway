#Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

COPY . .

CMD ["node", "src/server.js"]