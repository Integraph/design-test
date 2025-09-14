# Deployment Guide - Advanced Network Solutions

This guide covers deploying the Advanced Network Solutions marketing website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from GitHub

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables (see below)
   - Click "Deploy"

3. **Set Environment Variables** in Vercel Dashboard:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## 🌐 Other Deployment Options

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Same as Vercel

### AWS Amplify

1. **Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Railway

1. **Connect GitHub repository**
2. **Set environment variables**
3. **Deploy automatically**

## 🔧 Environment Configuration

### Required Environment Variables

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# HubSpot Configuration  
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Optional Environment Variables

```env
# Calendly Integration
NEXT_PUBLIC_CALENDLY_USERNAME=your-calendly-username

# Contact Information
NEXT_PUBLIC_PHONE_NUMBER=+1-555-123-4567
NEXT_PUBLIC_EMAIL=info@advancednetworksolutions.com

# Social Media
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/advanced-network-solutions
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/advancednetworks
```

## 📊 Performance Optimization

### Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test all pages load correctly
- [ ] Verify responsive design on mobile
- [ ] Check all forms submit properly
- [ ] Validate SEO meta tags
- [ ] Test cookie consent functionality
- [ ] Verify analytics tracking

### Performance Monitoring

1. **Lighthouse Audit**:
   - Run Lighthouse audit on deployed site
   - Ensure 90+ scores across all categories
   - Fix any performance issues

2. **Core Web Vitals**:
   - Monitor LCP, FID, and CLS
   - Use Google PageSpeed Insights
   - Set up monitoring alerts

## 🔒 Security Configuration

### HTTPS Enforcement

Ensure your hosting platform enforces HTTPS:
- Vercel: Automatic
- Netlify: Automatic
- AWS: Configure in CloudFront

### Security Headers

Add these headers to your hosting configuration:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property
   - Get your Measurement ID (G-XXXXXXXXXX)

2. **Configure Tracking**:
   - Add Measurement ID to environment variables
   - Verify tracking in GA4 Real-time reports

### HubSpot Integration

1. **Create HubSpot Account**:
   - Sign up at [hubspot.com](https://hubspot.com)
   - Get your Portal ID

2. **Configure Forms**:
   - Create forms in HubSpot
   - Update form IDs in the code
   - Test form submissions

## 🚀 Post-Deployment Tasks

### 1. Domain Configuration

If using custom domain:
1. Add domain to hosting platform
2. Configure DNS records
3. Set up SSL certificate
4. Update environment variables

### 2. SEO Setup

1. **Submit Sitemap**:
   - Submit `/sitemap.xml` to Google Search Console
   - Submit to Bing Webmaster Tools

2. **Google Search Console**:
   - Verify domain ownership
   - Monitor search performance
   - Fix any crawl errors

### 3. Monitoring Setup

1. **Uptime Monitoring**:
   - Set up UptimeRobot or similar
   - Monitor key pages
   - Configure alerts

2. **Error Tracking**:
   - Consider Sentry for error tracking
   - Monitor JavaScript errors
   - Track performance issues

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## 📞 Support

### Common Issues

1. **Build Failures**:
   - Check Node.js version (18+)
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Environment Variables**:
   - Ensure all required variables are set
   - Check variable names match exactly
   - Verify values are correct

3. **Performance Issues**:
   - Run Lighthouse audit
   - Check image optimization
   - Verify caching configuration

### Getting Help

- Check the main README.md for detailed setup instructions
- Review Next.js documentation for framework-specific issues
- Check hosting platform documentation for deployment issues

---

**Ready to deploy? Start with Vercel for the easiest setup!** 🚀