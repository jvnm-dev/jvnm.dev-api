FROM node:17.2
WORKDIR .
COPY ./package.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start:prod"]