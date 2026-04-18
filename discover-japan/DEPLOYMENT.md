# Deployment Guide - Discover Japan

This guide covers preparing and deploying the Discover Japan travel website.

## Pre-deployment Checklist

### 1. **Verify Build Process**
```bash
# Run type checking
npm run typecheck

# Test the build
PORT=3000 BASE_PATH=/ npm run build
```

### 2. **Environment Setup**

The project requires two environment variables:
- `PORT`: The port number for the server (e.g., 3000, 5173)
- `BASE_PATH`: The base path for the application (e.g., "/", "/discover-japan/")

#### Development (.env.local)
```
PORT=5173
BASE_PATH=/
```

#### Production (.env.production)
```
PORT=3000
BASE_PATH=/
```

### 3. **Dependencies**
Ensure all dependencies are installed:
```bash
npm install
```

## Deployment Steps

### Step 1: Build for Production
```bash
PORT=3000 BASE_PATH=/ npm run build
```

This creates optimized files in the `dist/public/` directory.

### Step 2: Test Production Build Locally
```bash
PORT=3000 BASE_PATH=/ npm run serve
```

Visit `http://localhost:3000/` to verify the build works correctly.

### Step 3: Deploy Built Files
- The `dist/public/` directory contains all production files
- Copy the contents to your hosting provider
- Ensure static assets are properly cached (use versioned filenames)

## Deployment Platforms

### **Vercel**
```bash
npm install -g vercel
vercel
```

### **Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/public
```

### **Traditional Server (Node.js)**
```bash
npm install -g serve
serve -l 3000 dist/public
```

### **Docker**
Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN PORT=3000 BASE_PATH=/ npm run build

EXPOSE 3000

ENV PORT=3000
ENV BASE_PATH=/

CMD ["npm", "run", "serve"]
```

Build and run:
```bash
docker build -t discover-japan .
docker run -p 3000:3000 discover-japan
```

## Production Considerations

✅ **Already Configured:**
- Vite production optimizations
- Tree-shaking for unused code
- CSS minification via Tailwind
- React Fast Refresh for development

📋 **Recommended Actions:**
1. Set up a CDN for static assets
2. Enable gzip compression on your server
3. Set up monitoring/error tracking
4. Configure CORS if needed
5. Use environment-specific configs for API endpoints
6. Set up CI/CD pipeline for automated deployments

## Build Output

- **Location:** `dist/public/`
- **Entry Point:** `index.html`
- **Assets:** All bundled and optimized in `dist/public/assets/`

## Troubleshooting

### Build fails with "PORT not provided"
```bash
# Make sure to set environment variables
PORT=3000 BASE_PATH=/ npm run build
```

### Port already in use
```bash
# Change the PORT value or kill process on that port
lsof -ti:3000 | xargs kill -9
```

### Base path issues
Adjust `BASE_PATH` based on your deployment URL:
- Root domain: `/`
- Subdirectory: `/discover-japan/`

## Performance Optimization

The app includes:
- Code splitting via Vite
- Component lazy loading (if implemented)
- Tailwind CSS pruning
- Image optimization (use for hero images)

## Monitoring

After deployment, monitor:
- Page load performance
- Error logs
- User analytics
- Mobile responsiveness

## Questions?

Refer to the [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for more details.
