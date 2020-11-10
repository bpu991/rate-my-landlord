from flask import Blueprint, jsonify, request
from sqlalchemy import func
from starter_app.models import Landlord

search_routes = Blueprint("search", __name__)

@search_routes.route('/<search_input>')
def search(search_input):
    # search = request.json.get("search", None)

    # results = Landlord.query.filter(func.lower(Landlord.fullName) == func.lower(search)).all()
    search = "%{0}%".format(search_input)
    results = Landlord.query.filter(Landlord.fullName.ilike(search))
    # print("------------------------------", [result.search_dict() for result in results])
    landlords = [landlord.search_dict() for landlord in results]
    # return {"Landlords": [result.search_dict() for result in results]}
    return jsonify(landlords)
