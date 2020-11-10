from flask import Blueprint, jsonify, request
import json
from starter_app.models import db, Review, Landlord
from sqlalchemy.sql import func

review_routes = Blueprint('reviews', __name__)

# @review_routes.route('/<landlord_param>')
# def landlord_reviews(landlord_param):
#     landlord_id = int(landlord_param)

#     response = Review.query.filter(landlord_id == Review.landlord_id).order_by(Review.id.desc())

#     return {'reviews': [review.to_dict() for review in response]}

#query all the reviews for the landlord
#count them and sum them
#add current (review rating + the sum) / count
#update the landlord's rating
#add current review to the reviews table

@review_routes.route('/create', methods=["POST"])
def create_review():
    rating = request.json.get("rating", None)
    title = request.json.get("title", None)
    content = request.json.get("content", None)
    landlord_id = request.json.get("landlord", None)
    user_id = request.json.get("user", None)

    if not rating:
        return 'Rating not found', 400
    if not title:
        return 'Review title not found', 400
    if not content:
        return 'Review content not found', 400

    review = Review(rating=rating, title=title, content=content, landlord_id=landlord_id, user_id=user_id)


    db.session.add(review)
    db.session.commit()

    reviews = Review.query.filter(landlord_id == Review.landlord_id).order_by(Review.id.desc())
    ratings_list = [review.get_rating() for review in reviews]
    print("Ratings List -------------------------------", ratings_list)
    landlord = Landlord.query.filter(landlord_id == Landlord.id).first()
    average = sum(ratings_list) / len(ratings_list)
    print("this is the rating--------------: ", landlord.rating)
    # if landlord.rating == 0 or landlord.rating == None:
    #     landlord.rating = float(rating)
    #     print("this is the rating--------------: ", landlord.rating)
    # else:
    #     average = sum(ratings_list) / len(ratings_list)
    landlord.rating = average
    print("this is the rating--------------: ", landlord.rating)
    
    

    # db.session.add(review)
    db.session.commit()

    reviews = Review.query.filter(landlord_id == Review.landlord_id).order_by(Review.id.desc())
    # landlord_avg = Review.query.filter(func.avg(Review.rating)).filter(Review.landlord_id == landlord_id)
    # landlord_avg = Review.query(func.avg(Review.rating).label('average')).filter(landlord_id == Review.landlord_id)
    # print("-------------------------------------------WWW", landlord_avg)
    all_landlord_reviews = [review.to_dict() for review in reviews]
    return {"reviews": all_landlord_reviews}
