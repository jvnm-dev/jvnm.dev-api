import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField

from jvm.availability.schema import AvailabilityQuery
from jvm.experience.schema import ExperienceQuery
from jvm.technology.schema import TechnologyQuery

class Query(AvailabilityQuery, ExperienceQuery, TechnologyQuery, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
