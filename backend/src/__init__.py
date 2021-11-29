from flask import Flask
from flask_cors import CORS


# RUN: python -m pytest --cov=src

def create_app():
    app = Flask(__name__)
    CORS(app)
    #app.config['SECRET_KEY'] = '6uyjghjb2il13y4k#@##!@asdklf'

    # blueprint for non-auth parts of app
    from .theory_api import theory_api as scales_bp
    app.register_blueprint(scales_bp)

    return app
