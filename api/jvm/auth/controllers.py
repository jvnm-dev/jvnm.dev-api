import bcrypt
from flask import jsonify
from flask_jwt_extended import create_access_token

from .models import User as UserModel


class User:
    @staticmethod
    def hash_password(password):
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

    @staticmethod
    def check_password(password, hash):
        return bcrypt.checkpw(password.encode('utf-8'), hash.encode('utf-8'))

    @staticmethod
    def signin(data):
        email = data.get('jvm_email')
        password = data.get('jvm_password')

        if email and password:
            user = UserModel.query.filter_by(email=email).first()

            if user:
                if User.check_password(password, user.password):
                    return jsonify({
                        'jwt': create_access_token(identity={
                                    'email': email
                               }),
                    }), 200

                return jsonify({
                    'error': 'incorrect_password'
                }), 400

            return jsonify({
                'error': 'user_not_found'
            }), 400

        return jsonify({
            'error': 'no_data'
        }), 400
