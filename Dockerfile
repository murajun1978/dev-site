FROM node:20-bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && corepack enable && corepack prepare pnpm@latest --activate
