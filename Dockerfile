FROM node:10-alpine
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
CMD [ "yarn", "deploy" ]
