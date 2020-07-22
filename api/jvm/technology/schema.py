import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

from .models import Technology as TechnologyModel


class TechnologyAttribute:
    id = graphene.ID(required=True)
    image = graphene.String()
    name = graphene.String()


class Technology(SQLAlchemyObjectType, TechnologyAttribute):
    class Meta:
        model = TechnologyModel
        interfaces = (graphene.relay.Node,)


class TechnologyQuery(graphene.ObjectType):
    technologies = graphene.List(Technology)

    def resolve_technologies(self, info):
        query = Technology.get_query(info)
        return query.all()
