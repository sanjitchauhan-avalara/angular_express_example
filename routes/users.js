var express = require('express');
var router = express.Router();

var counter = 1;

/* GET users listing. */
router.get('/', 
  function (req, res, next) {
    counter++;
    req.counter = counter;
    next();
  }
  ,function(req, res, next) {
  res.send('Counter value is ' + req.counter);
});

module.exports = router;
