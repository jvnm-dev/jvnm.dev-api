import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

from .models import Availability as AvailabilityModel

class AvailabilityAttribute:
    id = graphene.ID(required=True)
    status = graphene.Int()

class Availability(SQLAlchemyObjectType, AvailabilityAttribute):
    class Meta:
        model = AvailabilityModel
        interfaces = (graphene.relay.Node,)

class AvailabilityQuery(graphene.ObjectType):
    availability = graphene.Field(Availability)

    def resolve_availability(self, info):
        query = Availability.get_query(info)
        return query.order_by(AvailabilityModel.id).first()
