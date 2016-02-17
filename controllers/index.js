var express = require('express');
var router = express.Router();

// controller list
//router.use('/Auth', require('./auth'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express default' });
});

module.exports = router;
