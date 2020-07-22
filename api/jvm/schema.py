import graphene

from jvm.availability.schema import AvailabilityQuery, AvailabilityMutation
from jvm.experience.schema import ExperienceQuery
from jvm.technology.schema import TechnologyQuery


class Query(
    AvailabilityQuery,
    ExperienceQuery,
    TechnologyQuery,
    graphene.ObjectType
):
    pass


class Mutation(
    AvailabilityMutation,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
