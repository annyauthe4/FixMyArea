#!/usr/bin/env python3
"""Configuration for the database setup."""
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "super-secret")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///fixmyarea.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-super-secret")

    # Image upload
    UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
    # 5 MB max size
    MAX_CONTENT_LENGTH = 5 * 1024 * 1024
