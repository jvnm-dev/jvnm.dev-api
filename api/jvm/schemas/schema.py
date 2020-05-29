from graphene import ObjectType, Schema

from .availability import AvailabilityQuery
from .experience import ExperienceQuery
from .technology import TechnologyQuery


class Query(AvailabilityQuery, ExperienceQuery, TechnologyQuery, ObjectType):
    pass


schema = Schema(query=Query)
