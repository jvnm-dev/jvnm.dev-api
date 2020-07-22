from sqlalchemy import Column, Integer

from jvm.database import db


class Availability(db.Model):
    __tablename__ = 'availability'

    id = Column(Integer, primary_key=True)
    status = Column(Integer)
