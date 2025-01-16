# Deployment for the `ai` project

The `ai` project (chatbot backend APIs) is deployed on a Linux server (Ubuntu) with Docker and Nginx.

## 1. Run the project in a production environment with Docker

### 1.1 Prerequisites

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Nginx](https://nginx.org/)

### 1.2 Set up the environment variables:

Create a `.env` file in the root directory of the `ai` project and add the following environment variables:
```
OPENROUTER_API_KEY=key # Your OpenRouter API key
FRONTEND_URL=URL # URL that you use for frontend development or production. for CORS policy
```

### 1.3 Run the Docker container with Docker Compose

```bash
cd path/to/bccs-club/deployment/ai-deployment
# build the Docker container
sudo docker-compose -f docker-compose.prod.yml build
# run the Docker container in the background (detached mode)
sudo docker-compose -f docker-compose.prod.yml up -d
```

## 2. Configure Nginx as a reverse proxy

Check the [nginx-config.md](nginx-config.md) to set up Nginx as a reverse proxy for the `ai` project.
