FROM node:16.9
WORKDIR .
COPY ./package.json ./
RUN npm install --save --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "run start:prod"]