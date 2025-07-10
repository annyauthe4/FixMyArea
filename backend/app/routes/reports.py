#!/usr/bin/env python3
"""Report submission and listing routes
"""
from flask import Blueprint, request, jsonify
from app.models.report import Report
from app.models.user import User
from app import storage, db
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.utils.decorators import admin_required
from sqlalchemy import func, desc

report_bp = Blueprint('reports', __name__, url_prefix='/api/reports')


@report_bp.route('/', methods=['POST'], strict_slashes=False)
@jwt_required()
def create_report():
    "A user creates a report"
    current_user_id = get_jwt_identity()

    data = request.get_json()
    required_fields = (
                'title', 'description', 'category', 'location', 'priority'
            )
    if not data or not all(k in data for k in required_fields):
        return jsonify({'error': 'Missing fields'}), 400

    report = Report(
        title=data['title'],
        description=data['description'],
        category=data['category'],
        location=data['location'],
        priority=data['priority']
        image_url=data.get('image_url', ''),
        user_id=current_user_id
    )
    storage.new(report)
    return jsonify(report.to_dict()), 201


@report_bp.route('/summary', methods=['GET'], strict_slashes=False)
@jwt_required()
def summary():
    """Retun a summary of the status reports of the user"""
    user_id = get_jwt_identity()
    expected_statuses = ['resolved', 'pending', 'rejected']

    status_counts = (
        db.session.query(Report.status, func.count(Report.id))
        .filter_by(user_id=user_id)
        .group_by(Report.status)
        .all()
    )

    counts = {status: count for status, count in status_counts}

    for status in expected_statuses:
        counts.setdefault(status, 0)

    counts['total'] = sum(counts[status] for status in expected_statuses)

    return jsonify(counts), 200


@report_bp.route('/recent', methods=['GET'], strict_slashes=False)
@jwt_required()
def recent_reports():
    """ Return the last 3 reports """
    user_id = get_jwt_identity()
    recent = (
        Report.query
        .filter_by(user_id=user_id)
        .order_by(desc(Report.created_at))
        .limit(3)
        .all()
    )

    return jsonify([r.to_dict() for r in recent]), 200


@report_bp.route('/recent', methods=['GET'], strict_slashes=False)
@jwt_required()
def all_user_reports():
    user_id = get_jwt_identity()
    reports = Report.query.filter_by(user_id=user_id).all()
    return jsonify([r.to_dict() for r in reports]), 200


@report_bp.route('/', methods=['GET'], strict_slashes=False)
@jwt_required()
@admin_required
def list_reports():
    reports = Report.query.all()
    return jsonify([r.to_dict() for r in reports]), 200
