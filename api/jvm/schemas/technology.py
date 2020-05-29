from graphene import ObjectType, List

from .default import DefaultSchema
from ..models.technology import Technology as TechnologyModel


class Technology(DefaultSchema):
    class Meta:
        model = TechnologyModel


class TechnologyQuery(ObjectType):
    technologies = List(Technology)

    def resolve_technologies(self, info):
        query = Technology.get_query(info)
        return query.order_by(TechnologyModel.id).all()
