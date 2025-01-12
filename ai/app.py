from os import getenv
from flask import Flask, request, jsonify
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
    app.run(debug=True)


