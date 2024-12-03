# API

The API project is built with Java and Spring Boot, and it provides the backend services (RESTful APIs) for the BCCS Club website.

## Run the project Locally with Docker

### Prerequisites:

- [Docker](https://www.docker.com/get-started/)

### Build and run the Docker container:

```bash
cd path/to/bccs-club/api
docker-compose up --build
````

Open [http://localhost:8080/api/v1/calendar/events](http://localhost:8080/api/v1/calendar/events) with your browser to see one of the API endpoints.

### Stop the Docker container:

```bash
cd path/to/bccs-club
docker-compose down
```

## Deployment (TODO)

TODO: Deploy the API project with Kubernetes.
