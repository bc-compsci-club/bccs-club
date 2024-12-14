# Database Operations

The PostgreSQL database is running in a Docker container. The database is used by the `api` project to store data. The `api` project is built with Java and Spring Boot, and it provides the backend services (RESTful APIs).

## Prerequisites

Install Docker and Docker Compose, then build and run the Docker container for the `api` project. See the [api project README](../api/README.md) for more information.

## Connect to the PostgreSQL database

```bash
docker exec -it bccsclub-db psql -U postgres
```

Or using docker-compose:

```bash
cd path/to/bccs-club/api
docker-compose exec db psql -U postgres
```

## List all databases

```
postgres=# \list
```

## Connect to a database (e.g., `bccsclubdb`)

```
postgres=# \c bccsclubdb
```

## List all tables in the current database

```
bccsclubdb=# \dt
```

## Show the schema of a table

```
bccsclubdb=# \d table_name
```

## Show the schema of a table with more details

```
bccsclubdb=# \d+ table_name
```

## Show the data in a table

```
bccsclubdb=# SELECT * FROM table_name;
```

## Exit the PostgreSQL shell

```
bccsclubdb=# \q
```
