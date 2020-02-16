from ..models.availability import Availability

base = '/availability'

def availabilityRouter(app):
  @app.route(f'{base}')
  def getAll():
    return 'Availabilities'