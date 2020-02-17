from flask_graphql import GraphQLView
from .schemas.schema import schema

def router(app):
  app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True
    )
)