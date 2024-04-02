FROM node:14

WORKDIR /cache

ARG NPM_AUTH_TOKEN
ENV NPM_AUTH_TOKEN="${NPM_AUTH_TOKEN}"
COPY package.json .
COPY package-lock.json .
COPY .npmrc .
RUN npm install
RUN rm -f .npmrc

WORKDIR /application-dollar-frontend
ENV PATH /application-dollar-frontend/node_modules/.bin:$PATH
COPY . .