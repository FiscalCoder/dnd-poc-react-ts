FROM oven/bun:1.1.26-alpine

# Install required system dependencies for sqlite3
RUN apk add --no-cache libstdc++ 

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "start"]