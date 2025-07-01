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

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )

    def save(self):
        """Save instance to the database."""
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """Delete instance from the database."""
        db.session.delete(self)
        db.session.commit()

    def to_dict(self):
        """Return dictionary representation of the object."""
        return {
            "id": self.id,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
