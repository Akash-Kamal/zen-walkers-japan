FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build for production
RUN PORT=3000 BASE_PATH=/ npm run build

# Expose port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV BASE_PATH=/
ENV NODE_ENV=production

# Serve the app
CMD ["npm", "run", "serve"]
