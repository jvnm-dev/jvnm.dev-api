from flask import Flask

from jvm.extensions import db, migrate
from jvm.settings import ProductionConfig, DevelopmentConfig
from jvm.router import router

def create_app(config_object=ProductionConfig):
    app = Flask(__name__.split('.')[0])
    app.url_map.strict_slashes = False
    app.config.from_object(config_object)
    register_extensions(app)
    return app

def register_extensions(app):
    db.init_app(app)
    migrate.init_app(app, db)

app = create_app(DevelopmentConfig)
router(app)

if __name__ == '__main__':
    app.run()