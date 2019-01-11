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

var db = firebase.database();
db.ref('member').once('value').then(function (snapshot) {
    var data = snapshot.val();
    document.querySelector('#register').addEventListener('click', function (e) {
        var id = document.querySelector('.id').value;
        var pas = document.querySelector('.password').value;
        var name = document.querySelector('.name').value;
        var mail = document.querySelector('.mail').value;

        var qq = 0;
        for (i in data) {
            if (data[i].id == id) {
                qq = 1;
            }
        }
        if (name == '' || mail == '' || id == '' || pas == '') {
            alert('各欄位不可為空')
        } else {
            if (qq == 0) {
                db.ref('member').push().set({
                    'id': id,
                    'password': pas,
                    'name': name,
                    'mail': mail
                })
                alert('註冊成功請登入');
                window.location.href='/login';
            }
            if (qq == 1) {
                alert('此帳號已被使用');
            }
        }


    })

})

