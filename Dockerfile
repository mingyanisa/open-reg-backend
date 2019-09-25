FROM node:10-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
CMD yarn build && npm prune --production && yarn start:prod


