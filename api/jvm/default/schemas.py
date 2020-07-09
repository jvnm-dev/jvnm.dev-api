import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

class DefaultSchema(SQLAlchemyObjectType):
    class Meta:
        abstract = True

        def __init__(self):
            super().__init__()
            self.interfaces = (graphene.relay.Node, )
