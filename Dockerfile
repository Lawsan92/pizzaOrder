FROM node:15.13-alpine
WORKDIR /pizzaOrder
ENV PATH="./node_modules/ .bin:$PATH"
COPY . .
CMD [ "npm", "run", "server" ]