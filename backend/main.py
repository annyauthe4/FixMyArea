#!/usr/bin/env python3
"""Main
"""


from flask import Flask
from app import db, create_app
from app.models.user import User


# Use the application factory
app = create_app()

# Bind all models to db
with app.app_context():
    # Recreate the DB (for test purposes only; use migrations in real setup)
    db.drop_all()
    db.create_all()

    # Test creating a user
    print("✅ Creating new user...")
    user = User(name="Jane Doe", email="jane@example.com", password="secure123", is_admin=True)
    user.save()

    print("📄 User saved to DB.")
    print("🔑 Password correct:", user.check_password("secure123"))
    print("❌ Password incorrect:", user.check_password("wrongpass"))

    print("\n📦 Serialized user:")
    print(user.to_dict())

    # Cleanup
    user.delete()
    print("\n🗑️ User deleted from DB.")
