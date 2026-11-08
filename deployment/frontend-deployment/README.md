# Deploy the frontend

The production Docker image runs the standalone Next.js server as a non-root user. Build from the repository root:

```sh
docker build -t bccsclub-frontend ./frontend
docker run --rm -p 127.0.0.1:3000:3000 \
  -e BACKEND_URL=https://api.bccs.club \
  bccsclub-frontend
```

Put the frontend behind your HTTPS reverse proxy. Set `BACKEND_URL` to the Spring API's base URL. If using the AI widget, pass `--build-arg NEXT_PUBLIC_AI_BACKEND_URL=https://your-ai-host.example` when building the image. The frontend uses public API reads, so keep admin keys on the API server and the upload clients.

Check `/showcase`, a project detail URL, and `/events` after deploying. The production showcase reads the API and reports an error if the API is unavailable. Keep `SHOWCASE_DEMO` unset in deployment. For a local preview with generated projects, use `npm run dev --demo` from `frontend/`.

The previous Cloudflare Pages build used `@cloudflare/next-on-pages@1`. Its supported Next.js range ends at 15.5.2. Switch the deployment to the Node build above or validate a supported Cloudflare Workers adapter before moving production traffic.
