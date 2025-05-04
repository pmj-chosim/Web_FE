FROM mcr.microsoft.com/devcontainers/javascript-node:22

RUN pwd
WORKDIR /app
RUN pwd

COPY ./app/package*.json ./
RUN npm ci

EXPOSE 3000

COPY ./app/ ./
CMD ["npm", "run", "dev"]

