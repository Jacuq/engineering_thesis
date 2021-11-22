import sys

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    hm = [{'test': ['A', 'B#', 'C#']}]
    return jsonify(hm)


if __name__ == '__main__':
    app.run()
