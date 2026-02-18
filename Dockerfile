# Stage 1: Build the Angular application
FROM node:20 as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the built Angular files from the builder stage to Nginx's web root
COPY --from=builder /app/dist/edu-bot-ui /usr/share/nginx/html

# Copy a custom Nginx configuration if needed (e.g., for routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
