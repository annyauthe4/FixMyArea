#!usr/bin/env python3


class DBStorage:
    def __init__(self):
        self.db = None

    def init_app(self, db):
        """Initialize storage with the SQLAlchemy db instance."""
        self.db = db

    def all(self, cls=None):
        from app.models.user import User
        from app.models.report import Report
        classes = {"Report": Report, "user": User}
        if cls is None:
            return {name: model.query.all() for name,
                    model in classes.items()}
        else:
            cls.query.all()

    def get_by_id(self, id, cls):
        return cls.query.get(id)

    def new(self, obj):
        """Save instance to the database."""
        self.db.session.add(obj)
        self.db.session.commit()

    def save(self):
        """"""
        self.db.session.commit()

    def delete(self, obj):
        """Delete instance from the database."""
        self.db.session.delete(obj)
        self.db.session.commit()

