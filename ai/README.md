# Chat backend

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Python 3.x
- pip

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/bc-compsci-club/chat.git
    ```
2. Navigate to the project directory:
    ```bash
    cd chat/backend
    ```
3. Create a virtual environment:
    ```bash
    python -m venv venv
    ```
4. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
5. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

### Running the Project
1. Start the development server:
    ```bash
    python app.py
    ```

### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```
OPENROUTER_API_KEY=key
PINECONE_API_KEY=key
PINECONE_INDEX_NAME=key
TOKENIZERS_PARALLELISM=True # for huggingface embedding model
FRONTEND_URL= # URL that you use for frontend development or production
```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.