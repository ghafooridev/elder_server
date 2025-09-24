# ---------- Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Optional: system dependencies for proto
RUN apk add --no-cache bash curl unzip git

# Optional: protoc installation if using proto files
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

# Optional: generate proto TS files
RUN mkdir -p ./types
RUN npm run generate:proto

# Build file service
RUN npx nx build file --prod

# Create production node_modules
RUN rm -rf node_modules && npm ci --omit=dev --ignore-scripts

# ---------- Runtime ----------
FROM node:20-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Copy built application
COPY --from=builder --chown=nestjs:nodejs /app/dist/apps/file ./

# Copy production dependencies and package files
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./

USER nestjs

EXPOSE 3006

# Run service
CMD ["node", "main.js"]
