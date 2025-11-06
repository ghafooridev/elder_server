# ---------- Builder ----------
FROM node:20-bullseye-slim AS builder

WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y curl unzip git bash && rm -rf /var/lib/apt/lists/*

# Install protoc
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v23.4/protoc-23.4-linux-x86_64.zip \
    && unzip protoc-23.4-linux-x86_64.zip -d /usr/local \
    && rm protoc-23.4-linux-x86_64.zip

# Copy configs and package files
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY eslint.config.mjs ./
COPY .prettierrc ./

# Install dependencies (with dev for building)
RUN npm ci --only=production=false

# Install ts-proto
RUN npm install ts-proto --save-dev

# Copy apps/libs/proto
COPY apps ./apps
COPY libs ./libs
COPY proto ./proto

# Generate proto TS files
RUN mkdir -p ./types
RUN npx protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_out=./types \
    --ts_proto_opt=nestJs=true \
    ./proto/*.proto

# Prisma client for game
RUN npx prisma generate --schema=./apps/game/prisma/schema.prisma

# Build service
RUN npx nx build game --prod

# Create production node_modules
RUN rm -rf node_modules && npm ci --omit=dev --ignore-scripts

# ---------- Runtime ----------
FROM node:20-bullseye-slim AS runner
WORKDIR /app

RUN groupadd -g 1001 nodejs && useradd -m -u 1001 -g nodejs nestjs

COPY --from=builder --chown=nestjs:nodejs /app/dist/apps/game ./
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./
COPY --from=builder --chown=nestjs:nodejs /app/apps/game/prisma ./apps/game/prisma

USER nestjs

EXPOSE 5106

CMD ["sh", "-c", "npx prisma migrate deploy --schema=./apps/game/prisma/schema.prisma && node main.js"]


