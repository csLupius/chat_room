var firebase = require('firebase-admin');

//var serviceAccount = require('../auth/adminsdk.json');
var serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
var config = {
    credential : firebase.credential.cert(serviceAccount),
    databaseURL: "https://mychatapp-701bb.firebaseio.com"
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