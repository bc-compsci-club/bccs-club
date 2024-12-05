# Deployment for the `api` project

The `api` project is deployed on a Linux server (Ubuntu) with Docker and Nginx.

## 1. Run the project in a production environment with Docker

### 1.1 Prerequisites

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Nginx](https://nginx.org/)

### 1.2 Pull the Docker image from GitHub Container Registry

```bash
sudo docker pull ghcr.io/bc-compsci-club/bccsclub-api:latest
```

### 1.3 Run the Docker containers (bccsclub-api and bccsclub-db) with Docker Compose

```bash
cd path/to/bccs-club/api/deployment

docker-compose -f docker-compose.prod.yml up -d
```

## 2. Configure Nginx as a reverse proxy

Check the [nginx-config.md](nginx-config.md) to set up Nginx as a reverse proxy for the `api` project.
