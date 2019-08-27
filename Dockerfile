FROM node:10-alpine
COPY . .
RUN yarn
RUN yarn build
CMD [ "yarn", "deploy" ]