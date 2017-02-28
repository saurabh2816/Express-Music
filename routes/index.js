var express = require('express');
var router = express.Router(); //to work with external routes

router.get('/', function(req, res) {
   var data = req.app.get('appData'); //this route will now have access to data
   var pagePhotos = [];
   var pageBands = data.bands;

  data.bands.forEach(function(item){
    //pagePhotos = pagePhotos.concat(item.artwork); OR can be written my way
    item.artwork.forEach(function(i) {
      pagePhotos.push(i);
    });
  });

  res.render('index', {
    pageTitle: "Favorite Bands",
    pageID: "home", //to identify the current page that i'm on
    artwork: pagePhotos,
    bands: pageBands,

  }); //since i've specified my views folder it will look for index.ejs itself
});

module.exports = router; //so that app.js can access this router object

/*
<link rel="stylesheet" type="text/css" href="css/style.css">
<h1>Welcome .</h1>
<img src='/images/misc/background.png' alt='background'>
<p>Various bands that I like</p>
<script src="/reload/reload.js"></script>
*/
