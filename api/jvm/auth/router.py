import json
from flask import request
from .controllers import User as UserController


def router(app):
    @app.route('/auth/signin', methods=['POST'])
    def signin():
        data = json.loads(request.data)
        return UserController.signin(data)
