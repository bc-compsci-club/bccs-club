# Frontend

## Run the Fontend Locally with Docker (Recommended)

### Prerequisites:

- [Docker](https://www.docker.com/get-started/)

### Build and run the Docker container:

```bash
cd path/to/bccs-club
docker-compose up --build
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Stop the Docker container:

```bash
cd path/to/bccs-club
docker-compose down
```


## Run the Frontend Locally without Docker

### Prerequisites:

- [Node.js](https://nodejs.org/) 18.18 or later (please check the Node.js version requirement in [Next.js documentation](https://nextjs.org/docs/getting-started/installation))

### Install the dependencies:

```bash
cd path/to/bccs-club/frontend
npm install
```

### Run the development server:

```bash
cd path/to/bccs-club/frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build the project locally (for testing purposes):

```bash
cd path/to/bccs-club/frontend
npm run build
```
