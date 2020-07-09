from graphene import ObjectType, List
from .models import Technology as TechnologyModel
from .schemas import Technology as TechnologySchema

class Technology(ObjectType):
    technologies = List(TechnologySchema)

    def resolve_technologies(self, info):
        query = TechnologySchema.get_query(info)
        return query.order_by(TechnologyModel.id).all()
