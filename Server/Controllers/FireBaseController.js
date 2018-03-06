var firebase = require('firebase-admin');
var serviceAccount = require('../auth/adminsdk.json');
var config = {
    credential : firebase.credential.cert(serviceAccount),
    apiKey: "AIzaSyAZSjZEvwmsB6lwVKFeQrTYyD-q1rjxQUU",
    authDomain: "mychatapp-701bb.firebaseapp.com",
    databaseURL: "https://mychatapp-701bb.firebaseio.com",
    projectId: "mychatapp-701bb",
    storageBucket: "mychatapp-701bb.appspot.com",
    messagingSenderId: "923044003386"
};
firebase.initializeApp(config);
var DB = firebase.database();
//firebase.auth();
var FIREBASE = {}
FIREBASE.AddUser = function writeUserData(userId, name) {
    var id = userId.slice(userId.length - 12, userId.length) + "_" + name;
    console.log(id);
    FIREBASE.DB.ref('users/' + id).set({
        username: name,
        active: true
    });
}

module.exports = FIREBASE;