from dotenv import load_dotenv
load_dotenv()

from starter_app import app, db
from starter_app.models import User, City, Landlord, Review

with app.app_context():
  db.drop_all()
  db.create_all()

  #Users
  ian = User(username = 'Ian', email = 'ian@aa.io', password = 'password', city_id=1)
  javier = User(username='Javier', email='javier@aa.io', password='password', city_id=2)
  dean = User(username='Dean', email='dean@aa.io', password='password', city_id=3)
  angela = User(username='Angela', email='angela@aa.io', password='password', city_id=1)
  soonmi = User(username='Soon-Mi', email='soonmi@aa.io', password='password', city_id=2)
  alissa = User(username='Alissa', email='alissa@aa.io', password='password', city_id=3)

  #City
  los_angeles = City(cityName='Los Angeles')
  new_york = City(cityName='New York')
  boston = City(cityName='Boston')

  #Landlords
  bark_bedlinksy = Landlord(fullName='Bark Bedlinsky', city_id=3)
  john_johnson = Landlord(fullName='John Johnson', city_id=2)
  bart_simpson = Landlord(fullName='Bart Simpson', city_id=1)
  kanye_west = Landlord(fullName='Kanye West', city_id=1)
  kanye_east = Landlord(fullName='Kanye East', city_id=3)
  michael_scott = Landlord(fullName='Michael Scott', city_id=3)
  gandalf = Landlord(fullName='Gandalf', city_id=2)
  steve_jobs = Landlord(fullName='Steve Jobs', city_id=1)
  ariyah_mercer = Landlord(fullName='Ariyah Mercer', city_id=1)
  lukasz_byrd = Landlord(fullName='Lukasz Byrd', city_id=3)
  roan_potts = Landlord(fullName='Roan Potts', city_id=3)
  corey_wagner = Landlord(fullName='Corey Wagner', city_id=2)
  alya_plant = Landlord(fullName='Alya Plant', city_id=1)
  marni_macdonald = Landlord(fullName='Marni Macdonald', city_id=1)
  frazer_hutton = Landlord(fullName='Frazer Hutton', city_id=3)

  #Reviews
  review1 = Review(rating=1, title='The worst landlord', content='Would not turn on the heat in the winter', landlord_id= 1, user_id=1)
  review2 = Review(rating=1, title='Terrible', content='Stole my security deposit!', landlord_id=1, user_id=2)
  review3 = Review(rating=3, title='Ok', content='Cool guy', landlord_id=3, user_id=3)

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)

  db.session.add(los_angeles)
  db.session.add(new_york)
  db.session.add(boston)
  
  db.session.add(bark_bedlinksy)
  db.session.add(john_johnson)
  db.session.add(bart_simpson)
  db.session.add(kanye_west)
  db.session.add(kanye_east)
  db.session.add(michael_scott)
  db.session.add(gandalf)
  db.session.add(steve_jobs)
  db.session.add(ariyah_mercer)
  db.session.add(lukasz_byrd)
  db.session.add(roan_potts)
  db.session.add(corey_wagner)
  db.session.add(alya_plant)
  db.session.add(marni_macdonald)
  db.session.add(frazer_hutton)

  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)

  db.session.commit()
