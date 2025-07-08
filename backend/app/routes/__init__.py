#!/usr/bin/env python3
"""Route
"""


from .auth import auth_bp
from .reports import report_bp


def register_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(report_bp)
