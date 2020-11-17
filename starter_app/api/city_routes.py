from flask import Blueprint, jsonify
from starter_app.models import City, Landlord

city_routes = Blueprint('cities', __name__)


@city_routes.route('/')
def index():
  response = City.query.order_by(City.cityName).all()
  return {"cities": [city.to_dict() for city in response]}
