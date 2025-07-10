#!/usr/bin/env python3
"""Database app"""


# app/__init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_jwt_extended import JWTManager
from app.models.storage_engine.db_storage import DBStorage
from flask_cors import CORS
import cloudinary

storage = DBStorage()

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    cloudinary.config(
        cloud_name=app.config['CLOUDINARY_CLOUD_NAME'],
        api_key=app.config['CLOUDINARY_API_KEY'],
        api_secret=app.config['CLOUDINARY_API_SECRET']
    )

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    storage.init_app(db)
    CORS(app)

    from app.routes import register_routes
    register_routes(app)

    return app
