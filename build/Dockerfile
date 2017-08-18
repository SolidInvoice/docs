FROM node:8.3-alpine

RUN npm install -g gulp

ADD docker-entrypoint.sh /usr/bin/docker-entrypoint.sh

CMD sh /usr/bin/docker-entrypoint.sh