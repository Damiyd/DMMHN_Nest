FROM node:12
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
COPY package*.json ./
RUN npm install --force
RUN npm run build
EXPOSE 8080
CMD [ "node", "dist/main.js" ]