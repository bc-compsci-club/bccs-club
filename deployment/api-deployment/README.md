# Deployment for the `api` project

The `api` project is deployed on a Linux server (Ubuntu) with Docker and Nginx.

## 1. Run the project in a production environment with Docker

### 1.1 Prerequisites

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Nginx](https://nginx.org/)

### 1.2 Run the Docker containers (bccsclub-api and bccsclub-db) with Docker Compose

- The `bccsclub-api` container is deployed using the `ghcr.io/bc-compsci-club/bccsclub-api:latest` image from GitHub Container Registry
- The `bccsclub-db` container is deployed using the `postgres:16` image from Docker Hub

Before starting the production containers:

- Supply `DB_PASS` and `ADMIN_API_KEY` through the host environment or a private Compose environment file. For an existing PostgreSQL volume, set `DB_PASS` to the current role password. Changing the Compose value alone does not rotate an existing role password.
- Back up an existing database and apply the [project schema migration](../../docs/project-showcase-schema-migration.sql) if the `project` table already exists. For a fresh database or an existing database without the showcase table, bootstrap once with `DB_DDL_AUTO=update`, then remove that override and restart with schema validation enabled.
- Set the same `ADMIN_API_KEY` for the project and calendar upload scripts. Both send it in `X-Admin-Key`. Use the HTTPS API URL for uploads. Existing showcase-only keys remain supported by the API when explicitly configured.

```bash
cd path/to/bccs-club/deployment/api-deployment
docker compose -f docker-compose.prod.yml up -d
```

## 2. Configure Nginx as a reverse proxy

Check the [nginx-config.md](nginx-config.md) to set up Nginx as a reverse proxy for the `api` project.
