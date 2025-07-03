#!/usr/bin/env python3
"""User registration and login authentication routes
"""
from flask import Blueprint, request, jsonify
from app.models.user import User
from app import storage
from flask_jwt_extended import create_access_token
from app.utils.utils import set_password, check_password
from datetime import timedelta


auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@auth_bp.route('/register', methods=['POST'], strict_slashes=False)
def register():
    data = request.get_json()
    if not data or not all(k in data for k in ('name', 'email', 'password')):
        return jsonify({'error': 'Missing fields'}), 400

    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400

    user = User(
        name=data['name'],
        email=data['email'],
        password_hash=set_password(data['password'])
    )
    storage.new(user)
    return jsonify(user.to_dict()), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not all(k in data for k in ('email', 'password')):
        return jsonify({'error': 'Missing credentials'}), 400

    user = User.query.filter_by(email=data['email']).first()
    if not user or not check_password(user.password_hash, data['password']):
        return jsonify({'error': 'Invalid credentials'}), 401

    token = create_access_token(
        identity=user.id,
        expires_delta=timedelta(hours=2)
    )

    return jsonify({
        'message': 'Login successful',
        'access_token': token,
        'user': user.to_dict()
    }), 200
