#!/usr/bin/env python3
"""Report submission and listing routes
"""


from flask import Blueprint, request, jsonify
from app.models.report import Report
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.utils.decorators import admin_required

report_bp = Blueprint('reports', __name__, url_prefix='/api/reports')

@report_bp.route('/', methods=['POST'])
@jwt_required()
def create_report():
    current_user_id = get_jwt_identity()

    data = request.get_json()
    required_fields = ('title', 'description', 'latitude', 'longitude')
    if not data or not all(k in data for k in required_fields):
        return jsonify({'error': 'Missing fields'}), 400

    report = Report(
        title=data['title'],
        description=data['description'],
        latitude=data['latitude'],
        longitude=data['longitude'],
        image_url=data.get('image_url', ''),
        user_id=current_user_id
    )
    report.save()
    return jsonify(report.to_dict()), 201

@report_bp.route('/', methods=['GET'])
@jwt_required()
@admin_required
def list_reports():
    reports = Report.query.all()
    return jsonify([r.to_dict() for r in reports]), 200


