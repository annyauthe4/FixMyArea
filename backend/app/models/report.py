#!/usr/bin/env python3
"""The model for setting report schema in the database"""


from app.models.base_model import BaseModel
from app import db


class Report(BaseModel):
    __tablename__ = 'reports'

    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(255), nullable=False)
    status = db.Column(
                db.Enum(
                    'pending', 'resolved', 'rejected', name='report_status'),
                default='pending', nullable=False)
    image_url = db.Column(db.String(255))
    priority = db.Column(
                db.Enum('low', 'medium', 'high', name='report_priority'),
                nullable=False,
                default='medium'
                )
    location = db.Column(db.String(128))
    user_id = db.Column(
            db.String(36), db.ForeignKey('users.id'), nullable=False
            )
