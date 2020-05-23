from sqlalchemy import Column, Integer, String

from ..database import Base


class Experience(Base):
    __tablename__ = 'experience'

    id = Column(Integer, primary_key=True)
    image = Column(String)
    place = Column(String)
    date_from = Column(String)
    date_to = Column(String)
    role = Column(String)
