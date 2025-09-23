# ---------- Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install system dependencies for protoc
RUN apk add --no-cache bash curl unzip git

# Install protoc (Protobuf compiler)
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v23.4/protoc-23.4-linux-x86_64.zip \
    && unzip protoc-23.4-linux-x86_64.zip -d /usr/local \
    && rm protoc-23.4-linux-x86_64.zip

# Copy root configs + package files
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY eslint.config.mjs ./
COPY .prettierrc ./

# Install dependencies
RUN npm ci --only=production=false

# Copy apps, libs, and proto files
COPY apps ./apps
COPY libs ./libs
COPY proto ./proto

# Create folder for generated proto TS files
RUN mkdir -p ./types

# Generate proto TS files
RUN npm run generate:proto

# Generate Prisma client with correct binary targets
RUN npx prisma generate --schema=./apps/auth/prisma/schema.prisma

# Build auth service
RUN npx nx build auth --prod

# Create production node_modules
RUN rm -rf node_modules && npm ci --omit=dev --ignore-scripts

# ---------- Runtime ----------
FROM node:20-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Copy built application
COPY --from=builder --chown=nestjs:nodejs /app/dist/apps/auth ./

# Copy production dependencies and package files
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./

# Copy Prisma generated files and engines
COPY --from=builder --chown=nestjs:nodejs /app/apps/auth/prisma/generated ./apps/auth/prisma/generated

USER nestjs

EXPOSE 3001

# Run migrations before starting app
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./apps/auth/prisma/schema.prisma && node main.js"]
