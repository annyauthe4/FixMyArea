#!/usr/bin/env python3
"""The model for report"""


from app.models.base_model import BaseModel
from app import db

class Report(BaseModel):
    __tablename__ = 'reports'

    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.Text, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)

    def to_dict(self):
        base = super().to_dict()
        base.update({
            "title": self.title,
            "description": self.description,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "image_url": self.image_url,
            "user_id": self.user_id
        })
        return base
