# Welcome to Rate My Landlord!
--------------
**Description**
- Rate My Landlord is an app that lets users look up landlords in their city and read reviews about them.
- It also lets authorized users write their own reviews to share their own experiences with their landlord

**User Stories**
- As an unauthorized user, I want to be able to search for landlords in my city, or in a city I'm looking to move to, and find potential landlords to rent from.
- As an unauthorized user, I want to be able to read reviews that other users have written about the landlords in my city.
- As an unauthorized user, I want to be able to view the average rating of landlords in my city
- As an authorized user, I want to be able to write my own landlord reviews and have the ability to rate them out of 5.

**Technologies**
- Front-end: JavaScript, React, Redux, CSS3
- Back-end: Python, Flask
- ORM: SQLAlchemy

**Features**
- [x] User auth that allows users to login, logout and sign-up
- [x] A landing page with a full-text search bar that allows users to search the database for landlords
- [x] A navbar available on every webpage with links to login/signup routes, logout route and link to your city's landlord database (if already logged in)
- [x] A demo login that allows new users to fully experience the app without having to sign up
- [x] Profile pages for each individual landlord that displays their rating and all of their reviews
- [x] A review form for authenticated users that lets users write their own reviews
- [x] A form that allows authorized users to add a new landlord to the database

**Tables**
1. **Users**
    - username
    - email
    - hashed password
    - cityId (belongs to City table)
2. **Landlords**
    - fullName
    - rating
    - cityId (belongs to City Table)
3. **Cities**
    - cityName
    - users (has many users)
    - landlords (has many landlords)
4. **Reviews**
    - rating
    - title
    - content
    - landlord_id (belongs to landlord)
    - user_id (belongs to user)

**Important Routes**
1. `/api/session/signup` Signup
    - A route with a "POST" method that recieves the user input data from the front-end as json  and stores it in the database
2. `/api/session/login` Login
    - A route with a "POST" method that validates the user input data with the data stored in the database. If the username and password exist, the login_user function is called and authorizes the user for that session.
3. `/search/<search_input>` Full text search
    - Recieves a search input from the front end and queries the landlord name column for any related matches by using the .ilike() method. Returns up to 5 results.
4. `/review/create` Create review
    - A "POST" route that recieves review form data (corresponding landlord, rating, review content) from the frontend and saves it in the database. It then finds the average of all of the reviews belonging to that specific landlord and updates their rating in the review column of the landlord table.
5. `/landlords/reviews/<landlord_param>` Get reviews for specific landlord
    - This route is activated anytime a user navigates to a landlord's profile page. It will query the database for all the reviews belonging to that specific landlord and display them on the webpage.












