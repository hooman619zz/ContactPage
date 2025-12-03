# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for the final container
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only necessary files
COPY --from=base /app/next.config.js ./
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV production

# Start the application
CMD ["node", "server.js"]
