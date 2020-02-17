from flask import Flask

from jvm.router import router
from jvm.database import db_session
from jvm.models.availability import Availability

def create_app():
    app = Flask(__name__.split('.')[0])
    app.url_map.strict_slashes = False
    return app

app = create_app()
router(app)

if __name__ == '__main__':
    app.run(debug=True)