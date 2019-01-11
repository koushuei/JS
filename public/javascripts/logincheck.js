  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWPYwRZ0xVwJsnWkrPVKSqXa6j1oRoRog",
    authDomain: "supercooljs-8bd23.firebaseapp.com",
    databaseURL: "https://supercooljs-8bd23.firebaseio.com",
    projectId: "supercooljs-8bd23",
    storageBucket: "supercooljs-8bd23.appspot.com",
    messagingSenderId: "600626467019"
  };
  firebase.initializeApp(config);

  var db=firebase.database();

db.ref('member').once('value').then(function(snapshot){
    var data=snapshot.val();
    document.querySelector('#login').addEventListener('click', function (e) {
        var id=document.querySelector('.id').value;
        var pas=document.querySelector('.password').value;
        var log=0;
        for(i in data){
            if (id==data[i].id && pas==data[i].password){
                console.log('okok');
                log=1;
                document.cookie='user='+id;
                var p=document.cookie.indexOf('user');
                console.log(p);  
                console.log(document.cookie);
            }   
        }
        if(log==0){
            alert('帳號密碼錯誤');
        }
    })
  })
  

