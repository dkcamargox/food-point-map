# Food Points / Punto Plato

#### Video Demo:  https://youtu.be/uqZW6sjgOrg
#### Description:

Food Points is a web application which serves for linking people who want to donate food for homeless people to points in my city where them can donate it, and the homeless people already know the point. The idea of the project came because in their Instagram account have a image of the point but it does not show where you are in the map, and it can't be updated. The simplicity of adding a new Food Point into the map creates a really intuitive usage of the web application in which the user can feel very satisfied without taking to many time to do a simple thing, mark something in a map.

Food Points is a [Python Flask](https://flask.palletsprojects.com/en/1.1.x/) app, it also uses HMTL, CSS and [Javascript](https://www.javascript.com/). To develop it i had to use a Javascript module called [Leaflet.js](https://leafletjs.com/) it allows you to display a map in your web application. I decided to do this project because i really think it can helps people with computer science facilitaiting humans being lifes.

[application.py](./applycation.py):
This file is the main source code for the app, its composed by two routes `/`(the index) and `/add`(the route for adding a new food point in the map), the `/add` route has two methods a `POST` and a `GET` method while the `/` route works only with a `GET` method. In the first route we select all coordinades from the database and display it using the function from the [Flask](https://flask.palletsprojects.com/en/1.1.x/) called render template which render a html template using [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) the template language [Flask](https://flask.palletsprojects.com/en/1.1.x/) uses, The route `/add` in the method `GET` just render the template. The `/add` in `POST` it gets from the forms which were filled automatically by the javascript by clicking in some point of the map, after that it checks if the input are not empty looking for malicious users, and then insert it into the database.

[requirements.txt](./requirements.txt):
These are a list of the modules the applications need to work. which are the cs50 library for python whose i used for the SQLite connector for the database, the Flask whose i used for creating the server in which all the routes exists, it's also the Flask module that renders all the templates and merge it throught the layout.html and the actual home.html and add.html. i used requests for managing the type of request the application was doing (GET, POST, DELETE, PUT) and also used for getting the information from the html form tag.

[/templates](./templates):
These are the templates in HTML, i decided using the same colors the Punto Plato project already uses for coherency. There's three html templates the layout which is the skull of all the project, with a header and a footer which all the pages share, and the links and header, and import of the bootstrap a styling library also used on this project for styling the form and some buttons for practicity. The home.html is the template for the index route and it renders besides the layout css a proper css and a proper javascript script to the app, for creating, rendering and controlling the map imported by leafletjs. The map needs to be setten up and each javascript file does this for each html file. The add.html is the template with the clickable map which was really easy for doing because the forms were styled by bootstrap whose for itself uses flex-box so it all came right in hand

[/static](./static):
In this directory are three other sub-directories a `/css`, `javascript` and `assets`:

[/css](./static/css):
This folder contains all the styles for the templates. In these styles a generally prefer to use diplay-flex because it's really easy once you understand the concept, the way of aligning itself and using % for width really makes the reponsivity way easier to do.

[/assets ](./static/assets):
This folder contais the logo of the project, which i used in the app. The logo i downloaded and edited for searching the same colors to use in the app.

[/Javascript](./static/javascript):
Here in this folder are the scripts used for the front end of the templates, generally it controlls the map funcionality. These two files were really complicated at the begining because the navigator.geolocation.getCurrentPosition() function from the standard javascript is a promise, such as javascript is asyncronous these promises were a new concept to work since i didn't know how to work with variables whose could not get out of the promise nor get in. After i understood how it all worked the simple things i had to do were easily  done, tho i understand now that promisses are a subject i might need to intensify in the future.


