FROM node:12.19.0-alpine3.10
ADD ./app /app
WORKDIR /app
RUN npm install
CMD [ "npm", "start" ]