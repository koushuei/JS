var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var firebase = require('../service/firedata');

//var data=require("firedata.js");

/* GET home page. */
router.get('/', function (req, res, next) {
  
    firebase.ref('member').once('value', function (snapshot) {
        console.log(snapshot.val());
        var data = snapshot.val();
        res.render('login', {
            title: '登入',
            data: data
        });
        
    })
});

module.exports = router;

