var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
 
    res.render('index', { title: 'hello',
        name:'Abcde',
        saying:'i want to sleep',
        tag:'<h1>w;elifja;lskew.e,</h1>' });
});

module.exports = router;