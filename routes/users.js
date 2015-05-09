var express = require('express');
var router = express.Router();

var counter = 1;

/* GET users listing. */
router.get('/',
    function(req, res, next) {
        counter++;
        req.counter = counter;
        next();
    },
    function(req, res, next) {
        res.send('Counter value is ' + req.counter);
    });


router.post('/', function(req, res, next) {
  res.send(req.body);
});

router.get('/:id', function(req, res, next) {
  var id = req.param('id');
  res.send('Request id is ' + id);
});

module.exports = router;
