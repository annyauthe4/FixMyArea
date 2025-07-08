#!usr/bin/env python3
from werkzeug.security import generate_password_hash, check_password_hash

def set_password(password):
    """Hashes and sets the user password."""
    password_hash = generate_password_hash(password)

def check_password(password_hash, password):
    """Verifies if password matches the hash."""
    return check_password_hash(password_hash, password)