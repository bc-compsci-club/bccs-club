# Frontend

## Run the `fontend` project locally with Docker (for faster setup)

### Prerequisites:

- [Docker](https://www.docker.com/get-started/)

### Build and run the Docker container:

```bash
cd path/to/bccs-club/frontend
docker-compose up --build
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Stop the Docker container:

```bash
cd path/to/bccs-club/frontend
docker-compose down
```


## Run the `frontend` project locally without Docker

### Prerequisites:

- [Node.js](https://nodejs.org/) 18.18 or later (please check the Node.js version requirement in [Next.js documentation](https://nextjs.org/docs/getting-started/installation))

### Install the dependencies:

```bash
cd path/to/bccs-club/frontend
npm install
```

### Set up the environment variables:

Create a `.env.local` file in the root directory of the `frontend` project and add the environment variables from the `.env.local.example` file.
You can copy the `.env.local.example` file to `.env.local` using the following command if you are using a Unix-based system:
```
cp .env.local.example .env.local
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
