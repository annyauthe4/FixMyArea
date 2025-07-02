#!/usr/bin/env python3
"""The user model. This class inherits from the base_model and it
defines both the reporter and admin as well as methods for the user.
"""


import uuid
from app.models.base_model import BaseModel
from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(BaseModel):
    __tablename__ = 'users'

    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    def __init__(self, name, email, password, is_admin=False):
        self.id = str(uuid.uuid4())  # Explicit UUID assignment
        self.name = name
        self.email = email
        self.set_password(password)
        self.is_admin = is_admin

    def set_password(self, password):
        """Hashes and sets the user password."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Verifies if password matches the hash."""
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        """Returns a dictionary representation of the user (excluding password)."""
        base = super().to_dict()
        base.update({
            "name": self.name,
            "email": self.email,
            "is_admin": self.is_admin
        })
        return base

# Import Report after class definition to avoid circular import
from app.models.report import Report

# Relationship: a user can have multiple reports
User.reports = db.relationship('Report', backref='reporter', lazy=True)
