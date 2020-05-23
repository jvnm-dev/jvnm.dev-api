from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType

from ..models.experience import Experience as ExperienceModel


class Experience(SQLAlchemyObjectType):
    class Meta:
        model = ExperienceModel
        interfaces = (relay.Node, )
