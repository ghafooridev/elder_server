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
RUN npm install

# Copy apps, libs, and proto files
COPY apps ./apps
COPY libs ./libs
COPY proto ./proto

# Create folder for generated proto TS files
RUN mkdir -p ./types

# Generate proto TS files
RUN npx nx generate:proto

# Build auth service
RUN npx nx build auth

# ---------- Runtime ----------
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist/apps/auth ./dist
COPY package*.json ./

RUN npm install --omit=dev --ignore-scripts

CMD ["node", "dist/main.js"]
