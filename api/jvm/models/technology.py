from sqlalchemy import Column, Integer, String

from ..database import Base


class Technology(Base):
    __tablename__ = 'technology'

    id = Column(Integer, primary_key=True)
    image = Column(String)
    name = Column(String)
