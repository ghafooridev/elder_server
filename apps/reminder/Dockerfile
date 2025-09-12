FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache bash curl unzip git

RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v23.4/protoc-23.4-linux-x86_64.zip \
    && unzip protoc-23.4-linux-x86_64.zip -d /usr/local \
    && rm protoc-23.4-linux-x86_64.zip

COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY eslint.config.mjs ./
COPY .prettierrc ./

RUN npm install

COPY apps ./apps
COPY libs ./libs
COPY proto ./proto

RUN mkdir -p ./types
RUN npx nx generate:proto
RUN npx nx build reminder

FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist/apps/reminder ./dist
COPY package*.json ./

RUN npm install --omit=dev --ignore-scripts

CMD ["node", "dist/main.js"]
