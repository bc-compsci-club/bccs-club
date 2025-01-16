# AI Chatbot Backend

Our custom AI chatbot integrates internal data with an LLM to help users find information more easily and quickly.

## Tech Stack

- Python 3.9+
- Flask
- LangChain
- LLM

## Run the `ai` backend API endpoints locally with Docker (for faster setup)

### Prerequisites

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [OpenRouter API Key](https://openrouter.ai)

### Set up the environment variables:

Create a `.env` file in the root directory of the `ai` project and add the following environment variables:
```
OPENROUTER_API_KEY=key # Your OpenRouter API key
FRONTEND_URL=URL # URL that you use for frontend development or production. for CORS policy
```

### Build and run the Docker container:

```bash
cd path/to/bccs-club/ai
docker-compose build  # Build the Docker container
docker-compose up  # Run the Docker container (may take tens of seconds to start)
```

## Run the `ai` backend API endpoints locally without Docker

### Prerequisites

- Python 3.12
- pip

### Install the dependencies

```bash
cd path/to/bccs-club/ai
python -m venv .venv  # Create a virtual environment
source .venv/bin/activate  # Activate the virtual environment
pip install -r requirements.txt
```

### Set up the environment variables:
Create a `.env` file in the root directory of the `ai` project and add the following environment variables:
```
OPENROUTER_API_KEY=key
FRONTEND_URL= # URL that you use for frontend development or production. for CORS policy
```

### Run the development server:

```bash
cd path/to/bccs-club/ai
python app.py

# Or run the Flask app in development mode
flask run
```
