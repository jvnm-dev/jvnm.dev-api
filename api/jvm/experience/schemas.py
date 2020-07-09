
from ..default.schemas import DefaultSchema
from ..experience.models import Experience as ExperienceModel

class Experience(DefaultSchema):
    class Meta:
        model = ExperienceModel
