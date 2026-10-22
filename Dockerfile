# ==========================================
# Stage 1: Build the Production Bundle
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies using package-lock.json for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy project source files
COPY . .

# Build production bundle (configured in vite.config.ts to output to /app/docs)
RUN npm run build

# ==========================================
# Stage 2: Production Web Server
# ==========================================
FROM nginx:alpine

# Render sets PORT env variable (defaults to 10000)
ENV PORT=10000

# Copy template configuration (Nginx image runs envsubst automatically on startup)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy built static files from builder
COPY --from=builder /app/docs /usr/share/nginx/html

# Expose port for Render
EXPOSE 10000

# Launch Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]
