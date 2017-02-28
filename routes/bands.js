var express = require('express');
var router = express.Router(); //to work with external routes


router.get('/bands', function(req, res) {
  //all our information is available through request, so we'll get our appData variable from req'
    // var dataFile = req.app.get('appData');   //This property holds a reference to the instance of the Express application that is using the middleware.
    // var info = "";
    // dataFile.bands.forEach( function(item) {
    //   info += `
    //   <li>
    //   <h2>${item.title}</h2>
    //   <p> - ${item.name} </p>
    //   <img src="/images/bands/${item.shortname}.jpg" alt="${item.title}">
    //   <h3>About</h3>
    //   <p>${item.summary}</p>
    //   <h3>History</h3>
    //   <p>${item.history}</p>
    //   </li>`;
    // });
    // res.send(`
    //   <link rel="stylesheet" type="text/css" href="/css/style.css">
    //   <h1>Favorite Bands</h1>
    //   ${info};
    //   <script src="/reload/reload.js"></script>
    //   `);

    var data = req.app.get('appData'); //this route will now have access to data
    var pagePhotos = [];
    var pageBands = data.bands;

   data.bands.forEach(function(item){
     //pagePhotos = pagePhotos.concat(item.artwork); OR can be written my way
     item.artwork.forEach(function(i) {
       pagePhotos.push(i);
     });
   });

   res.render('bands', {
     pageTitle: "Bands",
     artwork: pagePhotos,
     bands: pageBands,
     pageID: "speakerList" //to identify the current page that i'm on

   });
});


router.get('/bands/:bandid', function(req, res) {
  // var dataFile = req.app.get('appData');
  // var band = dataFile.bands[req.params.bandid];
  // res.send(`
  //   <link rel="stylesheet" type="text/css" href="/css/style.css">
  //   <h1>${band.title}</h1>
  //   <h2>with  ${band.name}</h2>
  //   <img src="/images/bands/${band.shortname}.jpg" alt="${band.title}">
  //   <p>${band.summary}</p>
  //   <script src="/reload/reload.js"></script>
  //   `);
  var data = req.app.get('appData'); //this route will now have access to data
  var pagePhotos = [];
  var pageBands = [];

 data.bands.forEach(function(item){
   //pagePhotos = pagePhotos.concat(item.artwork); OR can be written my way
   if(item.shortname == req.params.bandid) //only the speaker that is added to the URL will be shown along with only it's artwork.
   {
     pageBands.push(item);
     pagePhotos = pagePhotos.concat(item.artwork); //pagePhotos = pagePhotos.concat(item.artwork);
    // console.log(pagePhotos);
   }
 });

 res.render('bands', {
   pageTitle: "Bands Info",
   artwork: pagePhotos,
   bands: pageBands,
   pageID: "speakerDetail" //to identify the current page that i'm on

 });
});

module.exports = router;
