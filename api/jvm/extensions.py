# -*- coding: utf-8 -*-
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy, Model

class CRUDMixin(Model):
    @classmethod
    def create(cls, **kwargs):
        instance = cls(**kwargs)
        return instance.save()

    def update(self, commit=True, **kwargs):
        for attr, value in kwargs.items():
            setattr(self, attr, value)
        return commit and self.save() or self

    def delete(self, commit=True):
        db.session.delete(self)
        return commit and db.session.commit()

    def save(self, commit=True):
        db.session.add(self)
        if commit:
            db.session.commit()
        return self

db = SQLAlchemy(model_class=CRUDMixin)
migrate = Migrate()