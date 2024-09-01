FROM oven/bun:1.1.26-alpine

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev"]