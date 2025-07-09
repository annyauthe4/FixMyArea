#!/usr/bin/env python3
"""This module is run with python3 to check created users"""


from app import create_app, db
from app.models.user import User
from flask import jsonify

app = create_app()


with app.app_context():
    users = User.query.all()
    for user in users:
        print((user.to_dict()))
