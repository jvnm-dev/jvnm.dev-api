from ..default.schemas import DefaultSchema
from ..technology.models import Technology as TechnologyModel

class Technology(DefaultSchema):
    class Meta:
        model = TechnologyModel
