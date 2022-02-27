FROM node:alpine

WORKDIR /app

RUN npm install -g ganache-cli

CMD ["ganache-cli", "-h", "0.0.0.0"]
