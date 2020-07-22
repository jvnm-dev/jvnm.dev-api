import graphene
import datetime
from graphene_sqlalchemy import SQLAlchemyObjectType

from ..utils import input_to_dictionary
from ..database import db
from .models import Availability as AvailabilityModel


class AvailabilityAttribute:
    id = graphene.ID(required=True)
    status = graphene.Int()


class Availability(SQLAlchemyObjectType, AvailabilityAttribute):
    class Meta:
        model = AvailabilityModel
        interfaces = (graphene.relay.Node,)


class UpdateAvailabilityInput(graphene.InputObjectType, AvailabilityAttribute):
    pass


class UpdateAvailability(graphene.Mutation):
    availability = graphene.Field(lambda: Availability)

    class Arguments:
        input = UpdateAvailabilityInput(required=True)

    def mutate(self, info, input):
        data = input_to_dictionary(input)

        availability = db.session.query(AvailabilityModel).filter_by(id=data['id'])
        availability.update(data)
        db.session.commit()
        availability = db.session.query(AvailabilityModel).filter_by(id=data['id']).first()

        return UpdateAvailability(availability=availability)


class AvailabilityQuery(graphene.ObjectType):
    availability = graphene.Field(Availability)

    def resolve_availability(self, info):
        query = Availability.get_query(info)
        return query.order_by(AvailabilityModel.id).first()


class AvailabilityMutation(graphene.ObjectType):
    updateAvailability = UpdateAvailability.Field()
