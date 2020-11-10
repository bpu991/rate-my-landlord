from flask import Blueprint, jsonify
from starter_app.models import db, Landlord, Review, City
import itertools

landlord_routes = Blueprint('landlords', __name__)



@landlord_routes.route('/') #Get all landlords
def index():
  landlords = Landlord.query.order_by(Landlord.fullName).all()
  return {"landlords": [landlord.to_dict() for landlord in landlords]}

@landlord_routes.route('/<landlord_param>') #get info for specific landlord
def get_single_landlord(landlord_param):
  landlord_id = int(landlord_param)
  response = Landlord.query.filter(landlord_id == Landlord.id).one()
  return response.to_dict()


@landlord_routes.route('/reviews/<landlord_param>') #Get all reviews for a specific landlord
def landlord_reviews(landlord_param):
    landlord_id = int(landlord_param)
    response = Review.query.filter(landlord_id == Review.landlord_id).order_by(Review.id.desc())
    
    return {'reviews': [review.to_dict() for review in response]}
    # return {"review list": [review.to_dict() for review in response]}


@landlord_routes.route('/city/<city_params>')  # Get all the landlords in that city
def landlord_in_city(city_params):
  city_id = int(city_params)

  response = Landlord.query.filter(city_id == Landlord.city_id)

  return {"landlords in this city": [landlord.to_dict() for landlord in response]}
