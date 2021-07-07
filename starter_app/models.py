from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
# import flask_whooshalchemyplus
# from whoosh.analysis import SimpleAnalyzer

db = SQLAlchemy()

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(128), nullable=False)
  #Relationships:
  city_id = db.Column(db.Integer, db.ForeignKey("cities.id"), nullable=False)

  reviews = db.relationship('Review', back_populates='user')
  city = db.relationship('City', back_populates='users')

  @property
  def password(self):
        return self.hashed_password

  @password.setter
  def password(self, password):
      self.hashed_password = generate_password_hash(password)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "city_id": self.city_id, #include the city in the query if you want to get more than just the city id
      "city": self.city.cityName
    }
  
  @classmethod
  def authenticate(cls, email, password):
        user = cls.query.filter(User.email == email).scalar()
        if user:
            return check_password_hash(user.hashed_password, password), user
        else:
            return None, None

class Landlord(db.Model):
  __tablename__ = 'landlords'
  # __searchable__ = ['fullName']
  # __analyzer__ = SimpleAnalyzer()

  id = db.Column(db.Integer, primary_key=True)
  fullName = db.Column(db.String(40), nullable=False)
  rating = db.Column(db.Integer)

  #Relationships
  city_id = db.Column(db.Integer, db.ForeignKey("cities.id"), nullable=False)

  reviews = db.relationship('Review', back_populates='landlord')
  city = db.relationship('City', back_populates='landlords')

  def to_dict(self):
    return {
        "id": self.id,
        "fullName": self.fullName,
        "rating": self.rating,
        "city_id": self.city_id,
    }
  
  def search_dict(self):
    return {
      "id": self.id,
      "fullName": self.fullName,
      "city": self.city.cityName
    }

class City(db.Model):
  __tablename__ = 'cities'

  id = db.Column(db.Integer, primary_key=True)
  cityName = db.Column(db.String(20), nullable=False)

  #Relationships
  users = db.relationship('User', back_populates='city')
  landlords = db.relationship('Landlord', back_populates='city')

  def to_dict(self):
    return {
        "id": self.id,
        "cityName": self.cityName,
    }

class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(30), nullable=False)
  content = db.Column(db.String(2000), nullable=False)

  #Relationships
  landlord_id = db.Column(db.Integer, db.ForeignKey("landlords.id"), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

  landlord = db.relationship('Landlord', back_populates='reviews')
  user = db.relationship('User', back_populates='reviews')

  def to_dict(self):
    return {
        "id": self.id,
        "rating": self.rating,
        "title": self.title,
        "content": self.content,
        "landlord_id": self.landlord_id,
        "user_id": self.user_id
    }

  def get_rating(self):
    return self.rating
