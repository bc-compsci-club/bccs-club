# Frontend

Use Node.js 22 and run these commands from the `frontend` directory:

```sh
npm ci
npm run dev --demo
```

Open [the local showcase](http://localhost:3000/showcase). To pass Next.js options, add them after `--`, for example `npm run dev --demo -- --port 3001`.

## Choose a data source

| Command | Showcase data | When to use it |
| --- | --- | --- |
| `npm run dev --demo` | 23 generated examples, including one featured project | Review the UI without starting Spring or PostgreSQL |
| `npm run dev` | Records from the API configured in `BACKEND_URL` | Test database-backed reads, search, and uploads |

Demo mode takes precedence over `BACKEND_URL` for showcase routes. The fixtures are generated in the frontend server process and disappear when you stop it. Their demo videos and embedded slides use external URLs and need an internet connection. Calendar and AI features still use their configured backends.

Restart the server to switch modes. To use real data, copy [the environment example](.env.example) to `.env.local` and set:

```dotenv
BACKEND_URL=http://127.0.0.1:8090
```

Start the Spring API and PostgreSQL using the [API setup guide](../api/README.md). For example, the development Docker Compose file in `api/` publishes the API on port 8090. Then use the [upload guide](../docs/upload-showcase-project.md) to add a project.

## Try the showcase

- In demo mode, the More projects grid shows 10, 10, and 2 cards across three pages. FocusFlow stays featured as you browse.
- Select **Mobile** and search for `photo walk`. The results should contain **Campus Photo Walk**.
- Open [FocusFlow](http://localhost:3000/showcase/focusflow) to test the presentation viewer, or [Campus Cart](http://localhost:3000/showcase/campus-cart) to see a project without a presentation.
- In database mode, an empty catalog shows “No projects have been published yet.” If projects fail to load, open `http://127.0.0.1:8090/v1/showcase/projects/browse` and check the API process, PostgreSQL connection, and `BACKEND_URL`.

## Build and deploy

```sh
npm run lint
npm run build
```

For a local Docker development server, run `docker compose up --build` from `frontend/`. Its default backend URL points to the host API. The [frontend deployment guide](../deployment/frontend-deployment/README.md) covers the standalone production image.
