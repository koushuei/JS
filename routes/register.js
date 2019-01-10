var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var firebase=require('../service/firedata')
//var data=require("firedata.js");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', { title: '註冊',data :'這是會員頁面' });

});

module.exports = router;