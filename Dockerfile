FROM node:10-alpine
COPY package.json .
RUN yarn
COPY . .
CMD yarn build && yarn deploy

