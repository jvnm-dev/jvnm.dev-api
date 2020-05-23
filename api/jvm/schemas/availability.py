from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType

from ..models.availability import Availability as AvailabilityModel


class Availability(SQLAlchemyObjectType):
    class Meta:
        model = AvailabilityModel
        interfaces = (relay.Node, )
