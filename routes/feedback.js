var express = require('express');
var router = express.Router(); //to work with external routes

router.get('/feedback', function(req, res) {
   var data = req.app.get('appData'); //this route will now have access to data


  res.render('feedback', { //should be the name of ejs file, here feedback.ejs
    pageTitle: "Feedback",
    pageID: "feedback",
  });
});

module.exports = router;
