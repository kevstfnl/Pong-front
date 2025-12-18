FROM node:24-alpine

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /pong/front

COPY package.json .

RUN npm install

COPY . .

RUN npm i -g serve

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]