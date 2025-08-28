# Deployment for the `frontend` project

The `frontend` project is deployed to [Cloudflare Pages](https://pages.cloudflare.com/). The deployment is triggered automatically when a pull request is merged to the `main` branch (production deployment) or other branches (generate preview pages).

## Cloudflare Pages configuration

### Build

- Git repository: bc-compsci-club/bccs-club
- Build configuration:
  - Framework preset: Next.js
  - Build command: npx @cloudflare/next-on-pages@1
  - Build output: .vercel/output/static
  - Root directory: frontend
  - Build comments: Enabled
- Build cache
  - Disabled
- Branch control
  - Production branch: main
  - Automatic deployments: Enabled
- Build watch paths
  - Include paths:`*`
- Build system version
  - Version 3
- Deploy Hooks
  - No deploy hooks defined

### Variables and Secrets

- Type: Plaintext
- Name: BACKEND_URL
- Value: https://api.bccs.club (use your API base URL here)

_Optional if you are not dealing with AI_
- Type: Plaintext
- Name: NEXT_PUBLIC_AI_BACKEND_URL
- Value: https://example.com (use your AI API base URL here)

### Runtime

- Placement: Default
- Compatibility date: May 5, 2025 (update this date if necessary)
- Compatibility flags: nodejs_compat (has to be typed manually, no such option available by default)

### General

- Name: bccs-club


## DNS configuration

The domain name (bccs.club) is managed by Cloudflare. The DNS configuration is set up to point to the Cloudflare Pages deployment:

- Type: CNAME
- Name: bccs.club
- Target: bccs-club.pages.dev

## How to build your branch?
In order to build your branch follow the steps: 
   1. Open the settings of your build. 
   2. Change "Choose Environment" to "Preview" option. 
   3. Make sure that "Branch Control" is set to "All non-production branches" 
That way every push you make to your repository will be processsed by Cloudfare for review (automatically). That provides a direct link tothe version of the bccs.club website based on your branch.  
