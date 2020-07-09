from ..default.schemas import DefaultSchema
from ..availability.models import Availability as AvailabilityModel

class Availability(DefaultSchema):
    class Meta:
        model = AvailabilityModel
