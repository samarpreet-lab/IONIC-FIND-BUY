# Deploying FINDBUY Customer App to Vercel

This Ionic Angular application is configured for deployment to Vercel with the following setup:

## Quick Deploy

1. **Push to GitHub**: Ensure your project is in a GitHub repository
2. **Import to Vercel**: Go to [vercel.com](https://vercel.com) and import your repository
3. **Auto-deploy**: Vercel will automatically detect the configuration and deploy

## Configuration Files

### `vercel.json`
- Configures Vercel to use static build
- Sets output directory to `www` (Ionic's default)
- Routes all requests to `index.html` for SPA routing

### `package.json` 
- Added `vercel-build` script that uses a custom Angular configuration
- Uses `ng build --configuration vercel`

### `angular.json`
- Added "vercel" configuration that disables budget constraints
- Prevents build failures from large CSS/JS files
- Uses production environment settings

## Local Testing

Test the deployment build locally:

```bash
# Install dependencies
npm install

# Build for Vercel
npm run vercel-build

# Check output
ls www/
```

## Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel --prod
```

## Environment Configuration

The app uses production environment settings when deployed:
- Environment file: `src/environments/environment.prod.ts`
- Update this file with production API URLs, keys, etc.

## Troubleshooting

- **Budget errors**: The "vercel" configuration has budgets disabled
- **Build failures**: Check that all dependencies are in `package.json`
- **Routing issues**: Vercel routes are configured for SPA in `vercel.json`

## Project Structure

```
FINDBUY-CUSTOMER-IONIC/
├── src/                    # Source code
├── www/                    # Build output (created after build)
├── vercel.json            # Vercel deployment config
├── package.json           # Dependencies and scripts
└── angular.json          # Angular build configuration
```

The app will be available at your Vercel domain after deployment.