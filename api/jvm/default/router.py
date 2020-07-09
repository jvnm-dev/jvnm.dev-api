import os
from graphene import Schema
from flask_graphql import GraphQLView

from ..default.query import Query
from ..user.router import router as userRouter

schema = Schema(query=Query)

def router(app):
    app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=os.environ.get('GRAPHIQL') == 'true'))
    userRouter(app)
