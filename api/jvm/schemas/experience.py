from graphene import ObjectType, List

from .default import DefaultSchema
from ..models.experience import Experience as ExperienceModel


class Experience(DefaultSchema):
    class Meta:
        model = ExperienceModel


class ExperienceQuery(ObjectType):
    experiences = List(Experience)

    def resolve_experiences(self, info):
        query = Experience.get_query(info)
        return query.order_by(ExperienceModel.id).all()
