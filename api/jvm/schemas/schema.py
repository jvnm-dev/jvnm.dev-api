import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from .availability import Availability


class Query(graphene.ObjectType):
    availabilities = graphene.List(Availability)

    def resolve_availabilities(self, info):
        query = Availability.get_query(info)
        return query.all()

schema = graphene.Schema(query=Query)