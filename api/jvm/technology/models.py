from sqlalchemy import Column, Integer, String

from jvm.database import db


class Technology(db.Model):
    __tablename__ = 'technology'

    id = Column(Integer, primary_key=True)
    image = Column(String)
    name = Column(String)
