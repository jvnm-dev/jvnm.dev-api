import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField

from .availability import Availability
from ..models.availability import Availability as AvailabilityModel

class Query(graphene.ObjectType):
  availabilities = graphene.List(Availability)
  last_availability = graphene.Field(Availability)

  def resolve_availabilities(self, info):
    query = Availability.get_query(info)
    return query.all()

  def resolve_last_availability(self, info):
    query = Availability.get_query(info)
    return query.order_by(AvailabilityModel.id).first()

schema = graphene.Schema(query=Query)