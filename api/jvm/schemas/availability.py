from graphene import ObjectType, Field

from .default import DefaultSchema
from ..models.availability import Availability as AvailabilityModel


class Availability(DefaultSchema):
    class Meta:
        model = AvailabilityModel


class AvailabilityQuery(ObjectType):
    last_availability = Field(Availability)

    def resolve_last_availability(self, info):
        query = Availability.get_query(info)
        return query.order_by(AvailabilityModel.id).first()
