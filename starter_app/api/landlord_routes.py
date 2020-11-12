from flask import Blueprint, jsonify
from starter_app.models import db, Landlord, Review, City, User
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
def landlords_in_city(city_params):
  city_id = int(city_params)

  response = Landlord.query.filter(city_id == Landlord.city_id)

  return {"landlords in this city": [landlord.to_dict() for landlord in response]}


# Get all the landlords in your city
@landlord_routes.route('/city/<city_params>/<user_params>')
def a_landlords_in_your_city(city_params, user_params):
  city_id = int(city_params)
  user_city = int(user_params)

  a_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('a%'))
  b_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('b%'))
  c_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('c%'))
  d_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('d%'))
  e_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('e%'))
  f_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('f%'))
  g_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('g%'))
  h_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('h%'))
  i_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('i%'))
  j_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('j%'))
  k_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('k%'))
  l_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('l%'))
  m_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('m%'))
  n_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('n%'))
  o_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('o%'))
  p_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('p%'))
  q_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('q%'))
  r_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('r%'))
  s_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('s%'))
  t_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('t%'))
  u_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('u%'))
  v_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('v%'))
  w_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('w%'))
  x_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('x%'))
  y_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('y%'))
  z_response = Landlord.query.filter(city_id == Landlord.city_id and city_id == User.city_id).filter(Landlord.fullName.ilike('z%'))



  return {"aLandlordsInYourCity": [landlord.to_dict() for landlord in a_response],
          "bLandlordsInYourCity": [landlord.to_dict() for landlord in b_response],
          "cLandlordsInYourCity": [landlord.to_dict() for landlord in c_response],
          "dLandlordsInYourCity": [landlord.to_dict() for landlord in d_response],
          "eLandlordsInYourCity": [landlord.to_dict() for landlord in e_response],
          "fLandlordsInYourCity": [landlord.to_dict() for landlord in f_response], 
          "gLandlordsInYourCity": [landlord.to_dict() for landlord in g_response],
          "hLandlordsInYourCity": [landlord.to_dict() for landlord in h_response],
          "iLandlordsInYourCity": [landlord.to_dict() for landlord in i_response], 
          "jLandlordsInYourCity": [landlord.to_dict() for landlord in j_response],
          "kLandlordsInYourCity": [landlord.to_dict() for landlord in k_response],
          "lLandlordsInYourCity": [landlord.to_dict() for landlord in l_response],
          "mLandlordsInYourCity": [landlord.to_dict() for landlord in m_response],
          "nLandlordsInYourCity": [landlord.to_dict() for landlord in n_response],
          "oLandlordsInYourCity": [landlord.to_dict() for landlord in o_response],
          "pLandlordsInYourCity": [landlord.to_dict() for landlord in p_response],
          "qLandlordsInYourCity": [landlord.to_dict() for landlord in q_response],
          "rLandlordsInYourCity": [landlord.to_dict() for landlord in r_response],
          "sLandlordsInYourCity": [landlord.to_dict() for landlord in s_response],
          "tLandlordsInYourCity": [landlord.to_dict() for landlord in t_response],
          "uLandlordsInYourCity": [landlord.to_dict() for landlord in u_response],
          "vLandlordsInYourCity": [landlord.to_dict() for landlord in v_response],
          "wLandlordsInYourCity": [landlord.to_dict() for landlord in w_response],
          "xLandlordsInYourCity": [landlord.to_dict() for landlord in x_response],
          "yLandlordsInYourCity": [landlord.to_dict() for landlord in y_response],
          "zLandlordsInYourCity": [landlord.to_dict() for landlord in z_response], }
