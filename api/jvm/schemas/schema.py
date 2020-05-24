import graphene

from .availability import Availability
from .experience import Experience
from .technology import Technology
from ..models.availability import Availability as AvailabilityModel
from ..models.experience import Experience as ExperienceModel
from ..models.technology import Technology as TechnologyModel


class Query(graphene.ObjectType):
    last_availability = graphene.Field(Availability)
    experiences = graphene.List(Experience)
    technologies = graphene.List(Technology)

    def resolve_last_availability(self, info):
        query = Availability.get_query(info)
        return query.order_by(AvailabilityModel.id).first()

    def resolve_experiences(self, info):
        query = Experience.get_query(info)
        return query.order_by(ExperienceModel.id).all()

    def resolve_technologies(self, info):
        query = Technology.get_query(info)
        return query.order_by(TechnologyModel.id).all()


schema = graphene.Schema(query=Query)
