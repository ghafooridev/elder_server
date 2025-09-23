FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build only the file service
RUN npm run build file

EXPOSE 4000

# Run migrations if needed (not for Supabase here)
CMD ["sh", "-c", "node dist/apps/file/main.js"]
