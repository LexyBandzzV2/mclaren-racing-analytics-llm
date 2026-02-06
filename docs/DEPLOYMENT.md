# Deployment Guide

## Prerequisites

- Node.js 18+ and npm 9+
- Docker (for container deployment)
- Cloud platform account (Vercel, Netlify, AWS, etc.)

## Development Deployment

### Local Development

```bash
npm install
npm run dev
```

The app will run at `http://localhost:3000`

## Production Deployment

### Option 1: Vercel (Recommended)

Vercel offers seamless integration with GitHub and optimal Next.js/React performance.

#### Setup

1. Connect your GitHub repository to Vercel
2. Create environment variables in Vercel dashboard:
   - `VITE_OPENF1_API_KEY`
   - `VITE_JOLPICA_API_KEY`
   - Other configuration variables

3. Vercel will automatically build and deploy on push to `main`

#### Custom Domain

1. Add domain in Vercel project settings
2. Update DNS records to point to Vercel
3. Enable HTTPS (automatic with Vercel)

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[env]
  VITE_OPENF1_API_KEY = "your_key"
  VITE_JOLPICA_API_KEY = "your_key"
```

### Option 3: Docker + AWS/GCP/DigitalOcean

#### Build Docker Image

```bash
docker build -t mclaren-analytics:latest .
```

#### Push to Docker Registry

```bash
docker tag mclaren-analytics:latest yourusername/mclaren-analytics:latest
docker push yourusername/mclaren-analytics:latest
```

#### Deploy to AWS ECR

```bash
aws ecr create-repository --repository-name mclaren-analytics
docker tag mclaren-analytics:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/mclaren-analytics:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/mclaren-analytics:latest
```

#### Deploy to ECS

Use AWS CloudFormation or Terraform to deploy the container.

#### Deploy to Google Cloud Run

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/mclaren-analytics
gcloud run deploy mclaren-analytics --image gcr.io/PROJECT_ID/mclaren-analytics --platform managed --region us-central1
```

### Option 4: Traditional Server (Nginx)

```bash
# Build
npm run build

# Copy dist to server
scp -r dist/ user@server:/var/www/mclaren-analytics/

# Nginx config
server {
    listen 80;
    server_name mclaren-analytics.example.com;

    location / {
        root /var/www/mclaren-analytics;
        try_files $uri $uri/ /index.html;
    }

    # API proxy
    location /api/ {
        proxy_pass https://api.openf1.org/v1/;
        proxy_set_header X-API-Key $api_key;
    }
}
```

## Environment Configuration

### Production Environment Variables

Create `.env.production`:

```env
VITE_OPENF1_API_BASE_URL=https://api.openf1.org/v1
VITE_OPENF1_API_KEY=prod_key_here
VITE_JOLPICA_API_BASE_URL=https://api.jolpica.com/api
VITE_JOLPICA_API_KEY=prod_key_here
VITE_APP_ENV=production
VITE_CACHE_DURATION_MINUTES=60
```

## CI/CD Pipeline

GitHub Actions automatically:

1. Runs linter on every push
2. Runs TypeScript type check
3. Runs test suite
4. Builds production bundle
5. Uploads coverage report

### Customize CI/CD

Edit `.github/workflows/build.yml` and `.github/workflows/deploy.yml`

## Monitoring & Logging

### Sentry Integration

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.VITE_APP_ENV,
});
```

### Analytics

Integrate Google Analytics or Mixpanel:

```typescript
gtag('event', 'view_race_summary', {
  race_id: 'bahrain_2024',
  drivers: 2
});
```

## Performance Optimization

### Bundle Analysis

```bash
npm install -D vite-plugin-visualizer
```

Analyze bundle in `vite.config.ts`:

```typescript
import { visualizer } from "vite-plugin-visualizer";

export default defineConfig({
  plugins: [visualizer()],
});
```

### CDN Configuration

Configure CloudFlare for static asset caching:

- Cache TTL: 1 year for versioned assets
- Cache TTL: 5 minutes for index.html

## Rollback Procedures

### Vercel
```bash
vercel rollback
```

### Manual Rollback
```bash
git revert <commit-hash>
git push origin main
# Deployment automatically triggers
```

## Security Checklist

- [ ] Environment variables secured (never in code)
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] API rate limiting enabled
- [ ] Input validation implemented
- [ ] Security headers configured
- [ ] Dependencies updated
- [ ] Regular security audits

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Clear cache: `rm -rf node_modules && npm install`
- Check environment variables are set

### High Memory Usage
- Check for memory leaks in DevTools
- Optimize bundle size with `npm run build -- --analyze`
- Consider code splitting

### API Timeout Issues
- Increase timeout in service configurations
- Check API service status
- Verify network connectivity
