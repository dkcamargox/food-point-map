from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session import Session
from os import getenv

# Configure app
app = Flask(__name__)
app.secret_key = getenv('SECRET_KEY')

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Configure CS50 Library to use SQLite database
db = SQL(getenv('DATABASE_URL'))


db.execute(
    f'CREATE TABLE IF NOT EXISTS "food_points" ( 
        "id" INTEGER NOT NULL UNIQUE, 
        "latitude" REAL NOT NULL, 
        "longitude" REAL NOT NULL, 
        PRIMARY KEY("id") );'
)


@app.route('/')
def index():
    """Show map with the Food Points"""
    food_points = db.execute(
        'SELECT * FROM food_points;'
    )
    print(food_points)

    return render_template('home.html', food_points=food_points)


@app.route('/add', methods=['GET', 'POST'])
def add():
    """Add new Food Point into the map"""
    if request.method == 'GET':
        return render_template('add.html')
    
    new_latitude = request.form.get('latitude')
    new_longitude = request.form.get('longitude')

    if not new_latitude or not new_longitude:
        flash('You must select a location!')

        return render_template('add.html')
    
    db.execute(
        'INSERT INTO food_points(latitude, longitude) VALUES(:lat, :long);',
        lat=new_latitude,
        long=new_longitude
    )
    
    return redirect('/')