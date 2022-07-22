FROM node:18.0.0-alpine3.15
LABEL maintainer="Ooneex - Franck"
RUN mkdir -p /ooneex/design
WORKDIR /ooneex/design
RUN npm install -g sass
