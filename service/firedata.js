var admin = require("firebase-admin");

var serviceAccount = require("../supercooljs-8bd23-firebase-adminsdk-hrxe0-888a990b0a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://supercooljs-8bd23.firebaseio.com"
});

admin.database().ref('book').once('value', function (snapshop) {
  console.log(snapshop.val());
})

// 輸入 database 網址
module.exports = admin.database(); 
//module.exports的值為require後會回傳的值，require('firedata')