import graphene

from .availability import Availability
from .experience import Experience
from ..models.availability import Availability as AvailabilityModel
from ..models.experience import Experience as ExperienceModel


class Query(graphene.ObjectType):
    last_availability = graphene.Field(Availability)
    experiences = graphene.List(Experience)

    def resolve_last_availability(self, info):
        query = Availability.get_query(info)
        return query.order_by(AvailabilityModel.id).first()

    def resolve_experiences(self, info):
        query = Experience.get_query(info)
        print(query)
        return query.order_by(ExperienceModel.id).all()


schema = graphene.Schema(query=Query)
