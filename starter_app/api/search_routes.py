from flask import Blueprint, jsonify, request
from sqlalchemy import func
from sqlalchemy.orm import joinedload
from starter_app.models import Landlord

search_routes = Blueprint("search", __name__)

@search_routes.route('/<search_input>')
def search(search_input):
    
    search = "%{0}%".format(search_input)
    results = Landlord.query.filter(Landlord.fullName.ilike(search)).options(joinedload(Landlord.city)).limit(5).all()
    landlords = [landlord.search_dict() for landlord in results]
    return jsonify(landlords)
