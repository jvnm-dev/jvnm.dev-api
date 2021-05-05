FROM node:14.5
WORKDIR .
COPY ./package.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start:prod"]