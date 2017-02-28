var express = require('express');
var router = express.Router(); //to work with external routes
var feedbackData = require('../data/feedback.json');
var bodyParser = require('body-parser');
var fs = require('fs');

router.get('/api', function(req, res) {
  res.send(feedbackData);
//no render
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));

router.post('/api/', function(req, res) {
  feedbackData.unshift(req.body); //unshift means put it on top
fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
  if(err)
  console.log(err);
});
  res.json(feedbackData);
});

router.delete('/api/:id', function(req, res) {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if(err)
    console.log(err);
  });
  res.json(feedbackData);
});
module.exports = router;
