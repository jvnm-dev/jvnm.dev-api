from sqlalchemy import Column, Integer

from ..database import Base


class Availability(Base):
    __tablename__ = 'availability'

    id = Column(Integer, primary_key=True)
    status = Column(Integer)
