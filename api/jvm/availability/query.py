from graphene import ObjectType, Field

from .models import Availability as AvailabilityModel
from .schemas import Availability as AvailabilitySchema

class Availability(ObjectType):
    last_availability = Field(AvailabilitySchema)

    def resolve_last_availability(self, info):
        query = AvailabilitySchema.get_query(info)
        return query.order_by(AvailabilityModel.id).first()
