FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install node-sass@4.14.1
RUN npm rebuild node-sass
RUN npm install
RUN npm install react-scripts

COPY . .

RUN npm run build
