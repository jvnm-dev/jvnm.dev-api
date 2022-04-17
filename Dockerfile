FROM node:16.9
WORKDIR .
COPY ./package.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run start:prod"]