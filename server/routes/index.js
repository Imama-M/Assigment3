var express = require('express');
var router = express.Router();

/* note that the gift page was defined else where*/

/* GET home page. */
// 127.0.0.1 (/)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact us' });
});

module.exports = router;

