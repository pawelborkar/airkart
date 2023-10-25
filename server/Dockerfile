FROM node:18-alpine3.17
WORKDIR /app
COPY . /app
RUN pnpm install --production
EXPOSE 8000
CMD node app.js