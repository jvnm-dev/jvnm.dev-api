import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

from .models import Experience as ExperienceModel


class ExperienceAttribute:
    id = graphene.ID(required=True)
    image = graphene.String()
    place = graphene.String()
    date_from = graphene.String()
    date_to = graphene.String()
    role = graphene.String()


class Experience(SQLAlchemyObjectType, ExperienceAttribute):
    class Meta:
        model = ExperienceModel
        interfaces = (graphene.relay.Node,)


class ExperienceQuery(graphene.ObjectType):
    experiences = graphene.List(Experience)

    def resolve_experiences(self, info):
        query = Experience.get_query(info)
        return query.all()
