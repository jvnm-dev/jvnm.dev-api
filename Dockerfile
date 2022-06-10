FROM node:16.9
WORKDIR .
COPY ./package.json ./
RUN npm install --save --legacy-peer-deps
COPY . .
EXPOSE 8080
ENTRYPOINT [ "npm" ]
CMD ["run", "start:prod"]