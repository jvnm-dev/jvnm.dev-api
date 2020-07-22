import os


class Config(object):
    SECRET_KEY = os.environ.get('JVM_SECRET')
    APP_DIR = os.path.abspath(os.path.dirname(__file__))
    PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, os.pardir))
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_AUTH_USERNAME_KEY = 'email'
    JWT_AUTH_HEADER_PREFIX = 'Token'
    JWT_HEADER_TYPE = 'Token'


class ProdConfig(Config):
    ENV = 'prod'
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    GRAPHIQL = False


class DevConfig(Config):
    ENV = 'dev'
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    GRAPHIQL = True
