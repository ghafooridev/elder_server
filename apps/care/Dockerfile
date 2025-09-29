# # ---------- Builder ----------
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Install system dependencies for protoc
# RUN apk add --no-cache bash curl unzip git

# # Install protoc (Protobuf compiler)
# RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v23.4/protoc-23.4-linux-x86_64.zip \
#     && unzip protoc-23.4-linux-x86_64.zip -d /usr/local \
#     && rm protoc-23.4-linux-x86_64.zip

# # Copy root configs + package files
# COPY package*.json ./
# COPY nx.json ./
# COPY tsconfig.base.json ./
# COPY eslint.config.mjs ./
# COPY .prettierrc ./

# # Install dependencies
# RUN npm ci --only=production=false

# # Copy apps, libs, and proto files
# COPY apps ./apps
# COPY libs ./libs
# COPY proto ./proto

# # Create folder for generated proto TS files
# RUN mkdir -p ./types

# # Generate proto TS files
# RUN npm run generate:proto

# # Generate Prisma client for this service
# RUN npx prisma generate --schema=./apps/care/prisma/schema.prisma

# # Build service
# RUN npx nx build care --prod

# # Create production node_modules
# RUN rm -rf node_modules && npm ci --omit=dev --ignore-scripts


# # ---------- Runtime ----------
# FROM node:20-alpine AS runner
# WORKDIR /app

# # Create non-root user
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nestjs -u 1001

# # Copy built application
# COPY --from=builder --chown=nestjs:nodejs /app/dist/apps/care ./

# # Copy production dependencies and package files
# COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
# COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./

# # Copy Prisma schema + generated client
# COPY --from=builder --chown=nestjs:nodejs /app/apps/care/prisma ./apps/care/prisma

# USER nestjs

# # EXPOSE port
# EXPOSE 3003

# # Run migrations before starting app
# CMD ["sh", "-c", "npx prisma migrate deploy --schema=./apps/care/prisma/schema.prisma && node main.js"]

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

# Prisma client
RUN npx prisma generate --schema=./apps/care/prisma/schema.prisma

# Build service
RUN npx nx build care --prod

# Create production node_modules
RUN rm -rf node_modules && npm ci --omit=dev --ignore-scripts

# ---------- Runtime ----------
FROM node:20-bullseye-slim AS runner
WORKDIR /app

RUN groupadd -g 1001 nodejs && useradd -m -u 1001 -g nodejs nestjs

COPY --from=builder --chown=nestjs:nodejs /app/dist/apps/care ./
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./
COPY --from=builder --chown=nestjs:nodejs /app/apps/care/prisma ./apps/care/prisma

USER nestjs

EXPOSE 5100

CMD ["sh", "-c", "npx prisma migrate deploy --schema=./apps/care/prisma/schema.prisma && node main.js"]
