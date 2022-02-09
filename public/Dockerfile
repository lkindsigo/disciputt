FROM node:14.15


WORKDIR /public

COPY package*.json .

RUN npm install
COPY . .
CMD node index.js

# 