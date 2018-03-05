var express = require('express');
var router = express.Router();

const myData = { title: 'No Promise Express' };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', myData);
});

module.exports = router;
