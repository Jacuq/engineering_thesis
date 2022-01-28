
import flask
from flask import Blueprint, jsonify, request
from .notes_calc import find_scale, find_chord, find_interval, notes_mapping, get_random

theory_api = Blueprint('theory_api', __name__, url_prefix='/theory')


# casts root from format <note><S> to <note><#>
# and checks if root is a proper note name
# if not, returns None
def cast_root(root: str) -> str:
    root = root.upper()
    if len(root) == 2 and root[1] == 'S':
        root = root[0] + '#'
    if root not in notes_mapping:
        return None
    return root


def wrong_request(error_msg: str) -> flask.Response:
    response = {"error type": 'wrong_request',
                "error_msg": error_msg}
    return jsonify(response)


@theory_api.route('/')
def hello_world():
    scale = find_scale('C', 'harmonic_minor')
    return jsonify(scale)


@theory_api.route('/<obj_type>/<root>/<name>', methods=['GET'])
def get_obj(root: str, name: str, obj_type: str) -> flask.Response:
    # get root from link, check if it's a legal note and cast to proper format
    print(f"root:{root}; name:{name}; obj_type:{obj_type}")
    root = cast_root(root)
    if root is None:
        return wrong_request("Incorrect root note")

    # try to find proper object, if there's no matching obj type - wrong request
    obj = None
    if obj_type == 'chord':
        obj = find_chord(root, name)
    elif obj_type == 'scale':
        obj = find_scale(root, name)
    elif obj_type == 'interval':
        obj = find_interval(root, name)
    else:
        return wrong_request("Incorrect obj_type in request")

    # obj type was correct, but interval wasn't found - wrong interval in request
    if obj is None:
        return wrong_request(f"Incorrect {obj_type} name")

    # all went smooth - return requested sound
    return jsonify(obj)


@theory_api.route('/random/<obj_type>')
def get_random_obj(obj_type: str):
    obj = get_random(obj_type)
    if obj is None:
        return wrong_request("Wrong input for get_random")
    return jsonify(obj)
