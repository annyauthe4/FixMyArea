#!usr/bin/env python3


class DBStorage:
    def __init__(self):
        self.db = None

    def init_app(self, db):
        """Initialize storage with the SQLAlchemy db instance."""
        self.db = db

    def all(self):
        pass

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

