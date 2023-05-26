FROM node:18.12-alpine AS build

COPY . /app

WORKDIR /app

RUN npm install --force

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]