from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType

from ..models.technology import Technology as TechnologyModel


class Technology(SQLAlchemyObjectType):
    class Meta:
        model = TechnologyModel
        interfaces = (relay.Node, )
