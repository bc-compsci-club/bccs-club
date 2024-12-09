# api project

The `api` project is built with Java and Spring Boot, and it provides the backend services (RESTful APIs) for the BCCS Club website.

## Run the `api` project with Docker

### Prerequisites:

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Build and run the Docker container:

```bash
cd path/to/bccs-club/api

# Build the Docker image
docker-compose build

# Run the Docker container
docker-compose up

# Or run the Docker container in the background (detached mode)
docker-compose up -d
````

- Open http://localhost:8090/v1/calendar/events with your browser to see one of the API endpoints.
- API documentation is available at: http://localhost:8090/swagger-ui/index.html

### Stop the Docker container:

```bash
cd path/to/bccs-club
docker-compose down
```
