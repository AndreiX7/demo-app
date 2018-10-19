FROM node:latest
MAINTAINER Andrei
ENV NODE_ENV=development
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install
EXPOSE ${PORT}
ENTRYPOINT ["node", "index.js"]