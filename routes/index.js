var express = require('express');
var router = express.Router();
var firebase = require('../service/firedata');

/* GET home page. */
router.get('/', function (req, res, next) {
    firebase.ref('plant').once('value', function (snapshot) {
        console.log(snapshot.val());
        var data = snapshot.val();
        console.log(data[1].name);
        res.render('index', {
            //↑views內的ejs檔
            title: '多肉',
            'data': data,
           
        });
    })
});

module.exports = router;