#!/usr/bin/env python3
"""Main
"""
from flask import Flask
from app import create_app, storage
from app.models.user import User

app = create_app()

with app.app_context():
    user = User(name="John Doe", email="john@example.com", password_hash="secure456", is_admin=False)
    storage.new(user)
# Use the application factory
# app = create_app()

# # Bind all models to db
# with app.app_context():
#     # # Recreate the DB (for test purposes only; use migrations in real setup)
#     # db.drop_all()
#     # db.create_all()

#     # Test creating a user
#     print("✅ Creating new user...")
#     user = User(name="Jane Doe", email="jane@example.com", password="secure123", is_admin=True)
#     user.save()

#     print("📄 User saved to DB.")
#     print("🔑 Password correct:", user.check_password("secure123"))
#     print("❌ Password incorrect:", user.check_password("wrongpass"))

#     print("\n📦 Serialized user:")
#     print(user.to_dict())

#     # Cleanup
#     user.delete()
#     print("\n🗑️ User deleted from DB.")
