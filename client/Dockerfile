# ---------- Build Stage ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build   # Output: /app/build

# ---------- Nginx Stage ----------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx config for SPA routing
COPY ./nginx/app.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
