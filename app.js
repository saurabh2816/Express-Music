var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

//set environment variable for our application
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile); //make a variable that will be avaialbe to our entire app
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/' );

app.locals.siteTitle = 'Fav. Bands'; //siteTitle will be available in any of my views
//the use method allows our application to use external routes as part of the application.
app.locals.allBands = dataFile.bands;

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/bands'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

var server = app.listen(app.get('port'), function() {
  console.log("Server is running on " + app.get('port') + "...");
});

reload(server, app);
