# ---------- Stage 1: Build the Vite app ----------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy necessary files
COPY package*.json ./
COPY tsconfig*.json ./
COPY postcss.config.js tailwind.config.js vite.config.ts ./
COPY . .

# Install dependencies and build
RUN npm install
RUN npm run build

# ---------- Stage 2: Serve with NGINX ----------
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
