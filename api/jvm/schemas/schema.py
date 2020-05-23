import graphene

from .availability import Availability
from ..models.availability import Availability as AvailabilityModel


class Query(graphene.ObjectType):
    last_availability = graphene.Field(Availability)

    def resolve_last_availability(self, info):
        query = Availability.get_query(info)
        return query.order_by(AvailabilityModel.id).first()


schema = graphene.Schema(query=Query)