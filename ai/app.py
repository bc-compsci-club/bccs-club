from os import getenv
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import cross_origin, CORS
from chat import Chat

load_dotenv()
app = Flask(__name__)
chat = Chat()
cors = CORS(app, origins=getenv("FRONTEND_URL"))


@app.route("/api/v1/llm", methods=["POST"])
@cross_origin(supports_credentials=True)
def hello_world():
    content = (request.json[-1]["content"])

    def generate():
        for response in chat.response(content):
            yield response
    return generate()


if __name__ == "__main__":
    chat.initalize()
    # By default, app.run(debug=True) will bind to 127.0.0.1,
    # which only accepts connections from inside the container itself.
    # To access the Flask server on the host (your actual machine),
    # you must bind to 0.0.0.0, so the container’s port is exposed externally:
    app.run(debug=True, host="0.0.0.0", port=5000)
