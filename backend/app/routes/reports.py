#!/usr/bin/env python3
"""Report submission and listing routes
"""


from flask import Blueprint, request, jsonify
from app.models.report import Report
from app import db

report_bp = Blueprint('reports', __name__, url_prefix='/api/reports')

@report_bp.route('/', methods=['POST'])
def create_report():
    data = request.get_json()
    required_fields = ('title', 'description', 'latitude', 'longitude', 'user_id')
    if not data or not all(k in data for k in required_fields):
        return jsonify({'error': 'Missing fields'}), 400

    report = Report(
        title=data['title'],
        description=data['description'],
        latitude=data['latitude'],
        longitude=data['longitude'],
        image_url=data.get('image_url', ''),
        user_id=data['user_id']
    )
    report.save()
    return jsonify(report.to_dict()), 201

@report_bp.route('/', methods=['GET'])
def list_reports():
    reports = Report.query.all()
    return jsonify([r.to_dict() for r in reports]), 200
