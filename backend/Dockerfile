FROM node:14.17.5-alpine3.13 as builder
# RUN addgroup backend && adduser -S -G backend backend
# USER backend
WORKDIR /backend

COPY package*.json /backend/
RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "start"]