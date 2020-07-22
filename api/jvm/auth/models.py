from sqlalchemy import Column, Integer, String

from jvm.database import db


class User(db.Model):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
