var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var acceptLanguage = req.headers["accept-language"] ;
  var languages = acceptLanguage.match(/[a-zA-z\-]{2,10}/g) || [];
  var greeting = 'Svagata';
  if(languages[0] == 'en-US') {
    greeting = 'Welcome';
  } else if ( languages[0] == 'hi') {
    greeting = 'Svagata';
  } else {
    greeting = 'Svagata';
  }
  res.render('index', { greeting: greeting, title: 'Express' });
});

module.exports = router;
