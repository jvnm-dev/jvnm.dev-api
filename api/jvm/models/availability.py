from ..database import *

class Availability(Model):
  __tablename__ = 'availability'

  id = Column(Integer, primary_key=True)
