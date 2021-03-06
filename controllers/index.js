var express = require('express');
var router = express.Router();

// controller list
router.use('/Auth', require('./auth'));
router.use('/Status', require('./status'));

/* GET home page. */
router.get('/', function (req, res, next) {
    var cssList = [{ src: "/assets/css/statusFilter.css" }];
    res.render('index', { page_title: 'React Test App', cssList: cssList });
});

module.exports = router;
