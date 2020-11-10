import os
from starter_app.config import Config
from flask import Flask, render_template, request, session
from flask_migrate import Migrate
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
# import flask_whooshalchemyplus

from starter_app.models import db, User, Landlord, Review, City
from starter_app.api.user_routes import user_routes
from starter_app.api.landlord_routes import landlord_routes
from starter_app.api.session_routes import session_routes
from starter_app.api.city_routes import city_routes
from starter_app.api.review_routes import review_routes
from starter_app.api.search_routes import search_routes

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(landlord_routes, url_prefix='/api/landlords')
app.register_blueprint(session_routes, url_prefix='/api/session')
app.register_blueprint(city_routes, url_prefix='/api/city')
app.register_blueprint(review_routes, url_prefix='/api/reviews')
app.register_blueprint(search_routes, url_prefix='/api/search')
db.init_app(app)
# flask_whooshalchemyplus.init_app(app)
Migrate(app, db)

# create login manager
login_manager = LoginManager(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

## Application Security
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
