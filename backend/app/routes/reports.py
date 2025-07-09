#!/usr/bin/env python3
"""Report submission and listing routes
"""
from flask import Blueprint, request, jsonify
from app.models.report import Report
from app import storage
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.utils.decorators import admin_required
import cloudinary.uploader

report_bp = Blueprint('reports', __name__, url_prefix='/api/reports')


@report_bp.route('/', methods=['POST'], strict_slashes=False)
@jwt_required()
def create_report():
    "A user creates a report"
    current_user_id = get_jwt_identity()

    # Accept form data
    title = request.form.get('title')
    description = request.form.get('description')
    latitude = request.form.get('latitude', type=float)
    longitude = request.form.get('longitude', type=float)
    file = request.files.get('image')

    # Validate fields
    if not all([title, description, latitude, longitude]):
        return jsonify({'error': 'Missing fields'}), 400

    # Allowed image types
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

    def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

    # Upload or use default image
    image_url = 'https://res.cloudinary.com/demo/image/upload/v1710000000/default-placeholder.jpg'
    if file and allowed_file(file.filename):
        try:
            upload_result = cloudinary.uploader.upload(file)
            public_id = upload_result.get('public_id')
            image_url = cloudinary.CloudinaryImage(public_id).build_url(
                width=400, height=300, crop='fill', quality='auto', fetch_format='auto'
            )
        except Exception as e:
            return jsonify({'error': f'Image upload failed: {str(e)}'}), 500
    elif file:
        return jsonify({'error': 'Unsupported file type'}), 400

    # Save report
    report = Report(
        title=title,
        description=description,
        latitude=latitude,
        longitude=longitude,
        image_url=image_url,
        user_id=current_user_id
    )
    storage.new(report)
    return jsonify(report.to_dict()), 201


@report_bp.route('/', methods=['GET'], strict_slashes=False)
@jwt_required()
@admin_required
def list_reports():
    reports = Report.query.all()
    return jsonify([r.to_dict() for r in reports]), 200
