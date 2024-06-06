FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

EXPOSE 4201

CMD ["ng", "serve", "--host", "0.0.0.0"]

