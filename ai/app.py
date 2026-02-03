from os import getenv
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import cross_origin, CORS
from chat import Chat

load_dotenv()
app = Flask(__name__)
cors = CORS(app, origins=getenv("FRONTEND_URL"))

chat = Chat()
chat.initialize()

# Security constants
MAX_INPUT_LENGTH = 1000
SUSPICIOUS_PATTERNS = [
    "ignore previous instructions",
    "ignore all instructions",
    "disregard",
    "system prompt",
    "your instructions",
    "your rules",
    "repeat your",
    "what are your instructions",
    "act as",
    "pretend to be",
    "roleplay",
    "jailbreak",
    "dan mode",
    "developer mode"
]


@app.route("/api/v1/llm", methods=["POST"])
@cross_origin(supports_credentials=True)
def hello_world():
    try:
        # Validate request structure
        if not request.json or not isinstance(request.json, list) or len(request.json) == 0:
            return jsonify({"error": "Invalid request format"}), 400

        # Extract and validate content
        last_message = request.json[-1]
        if not isinstance(last_message, dict) or "content" not in last_message:
            return jsonify({"error": "Invalid message format"}), 400

        content = last_message["content"]

        # Validate input type
        if not isinstance(content, str):
            return jsonify({"error": "Content must be a string"}), 400

        # Validate input length
        if len(content) > MAX_INPUT_LENGTH:
            return jsonify({"error": f"Input exceeds maximum length of {MAX_INPUT_LENGTH} characters"}), 400

        # Check for empty or whitespace-only input
        if not content.strip():
            return jsonify({"error": "Input cannot be empty"}), 400

        # Check for suspicious prompt injection patterns
        content_lower = content.lower()
        for pattern in SUSPICIOUS_PATTERNS:
            if pattern in content_lower:
                return jsonify({"error": "Your question appears to be asking about system internals. Please ask about Brooklyn College Computer Science Club instead."}), 400

        def generate():
            for response in chat.response(content):
                yield response
        return generate()

    except Exception as e:
        # Log the error in production, but don't expose details to user
        print(f"Error processing request: {str(e)}")
        return jsonify({"error": "An error occurred processing your request"}), 500


if __name__ == "__main__":
    # By default, app.run(debug=True) will bind to 127.0.0.1,
    # which only accepts connections from inside the container itself.
    # To access the Flask server on the host (your actual machine),
    # you must bind to 0.0.0.0, so the container's port is exposed externally:
    # WARNING: Never use debug=True in production!
    debug_mode = getenv("FLASK_DEBUG", "False").lower() == "true"
    app.run(debug=debug_mode, host="0.0.0.0", port=5000)
