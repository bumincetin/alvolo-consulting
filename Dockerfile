# Base image with Node.js
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install pnpm globally if you prefer to use pnpm inside the container
# RUN npm install -g pnpm

# ------------------------------------

# Development stage
FROM base AS dev

# Copy package.json and lock file
# If using pnpm, copy pnpm-lock.yaml, if npm package-lock.json, if yarn yarn.lock
COPY package.json ./ 
# COPY pnpm-lock.yaml ./ 
COPY package-lock.json ./ 

# Install dependencies
# RUN pnpm install 
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]

# ------------------------------------

# Production builder stage
FROM base AS builder

# Copy package.json and lock file
COPY package.json ./
# COPY pnpm-lock.yaml ./ 
COPY package-lock.json ./ 

# Install dependencies for building
# RUN pnpm install --prod=false
RUN npm install --only=production=false # or use --omit=dev if npm v7+

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# ------------------------------------

# Production runner stage
FROM base AS runner

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
# COPY --from=builder /app/node_modules ./node_modules # Only if you have runtime deps not bundled by Next.js

# Expose port 3000
EXPOSE 3000

# Start the Next.js production server
# CMD ["pnpm", "start"] 
CMD ["npm", "run", "start"] 