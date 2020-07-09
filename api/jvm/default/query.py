from graphene import ObjectType

from ..availability.query import Availability as AvailabilityQuery
from ..experience.query import Experience as ExperienceQuery
from ..technology.query import Technology as TechnologyQuery

class Query(AvailabilityQuery, ExperienceQuery, TechnologyQuery, ObjectType):
    pass
