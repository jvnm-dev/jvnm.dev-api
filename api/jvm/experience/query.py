from graphene import ObjectType, List
from .models import Experience as ExperienceModel
from .schemas import Experience as ExperienceSchema

class Experience(ObjectType):
    experiences = List(ExperienceSchema)

    def resolve_experiences(self, info):
        query = ExperienceSchema.get_query(info)
        return query.order_by(ExperienceModel.id).all()
