# Deployment for the `frontend` project

The `frontend` project is deployed to [Cloudflare Pages](https://pages.cloudflare.com/). The deployment is triggered automatically when a pull request is merged to the `main` branch (production deployment) or other branches (generate preview pages).

## Cloudflare Pages configuration

### Build

- Git repository: bc-compsci-club/bccs-club
- Build configuration:
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
  - Version 2
- Deploy Hooks
  - No deploy hooks defined

### Variables and Secrets

- Type: Plaintext
- Name: BACKEND_URL
- Value: https://api.bccs.club (use your API base URL here)

- Type: Plaintext
- Name: NEXT_PUBLIC_AI_BACKEND_URL
- Value: https://example.com (use your AI API base URL here)

### Runtime

- Placement: Default
- Compatibility date: Nov 11, 2024 (update this date if necessary)
- Compatibility flags: nodejs_compat

### General

- Name: bccs-club


## DNS configuration

The domain name (bccs.club) is managed by Cloudflare. The DNS configuration is set up to point to the Cloudflare Pages deployment:

- Type: CNAME
- Name: bccs.club
- Target: bccs-club.pages.dev
