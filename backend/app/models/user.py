#!/usr/bin/env python3
"""The user model. This class inherits from the base_model and it
defines both the reporter and admin as well as methods for the user.
"""
import uuid
from app.models.base_model import BaseModel
from app import db


class User(BaseModel):
    __tablename__ = 'users'

    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)


# Import Report after class definition to avoid circular import
from app.models.report import Report

# Relationship: a user can have multiple reports
User.reports = db.relationship('Report', backref='reporter', lazy=True)
