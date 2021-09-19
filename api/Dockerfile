FROM node:16.9
WORKDIR .
COPY ./package.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start:prod"]