var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

const myData = { title: 'Promise Express' };

/* GET /promise/ */
router.get('/', function(req, res) {
    new Promise(function(res, rej) {
        res(myData);
    }).then(function(d) {
        res.render('index', d);
    });
});

module.exports = router;
