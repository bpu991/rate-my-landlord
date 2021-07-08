import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=True
  # SQLALCHEMY_DATABASE_URI = os.environ.get('HEROKU_POSTGRESQL_PURPLE_URL')
  SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
  if SQLALCHEMY_DATABASE_URI.startswith("postgres://"):
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace("postgres://", "postgresql://", 1)
  SQLALCHEMY_ECHO=True
  
