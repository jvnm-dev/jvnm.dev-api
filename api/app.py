from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from jvm.router import router
from jvm.database import db_session, db_uri, Base

def create_app(db_uri):
    app = Flask(__name__.split('.')[0])
    app.url_map.strict_slashes = False
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    return app

app = create_app(db_uri)
CORS(app)
migrate = Migrate(app, Base)
router(app)

if __name__ == '__main__':
    app.run(debug=True)