#!/usr/bin/env python3
"""The base model for FixMyArea project. This class serves as a parent
for other models like User, Report etc. It provides reusable attributes
and methods.
"""


# app/models/base_model.py

import uuid
from datetime import datetime
from app import db


class BaseModel(db.Model):
    __abstract__ = True

    id = db.Column(
            db.String(36), primary_key=True, default=lambda: str(uuid.uuid4())
            )
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )

    def to_dict(self):
        """Return dictionary representation of the object."""
        data = {
                column.name: getattr(self, column.name)
                for column in self.__table__.columns
                }
        data.pop("password", None)
        return data

    def __repr__(self):
        return f"{self.__class__.__name__}.{self.id}:{self.__dict__}"
