import os
from graphene import Schema
from flask_graphql import GraphQLView
from flask import current_app

from jvm.schema import schema
from jvm.auth.router import router as authRouter

def router(app):
    app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=current_app.config["GRAPHIQL"]))
    authRouter(app)
