var TOOLS = {
    checkUsername: function (name) {
        var result = true;
        require('../models/UserList').Users.map(
            (user) => {
                if (user.username === name) {
                    result = false;
                }
            });
        return result;
    },
    getAllUserInfo: function () {
        var res = [];
        for (var i = 0; i < require('../models/UserList').Users.length; i++) {
            res.push({ name : require('../models/UserList').Users[i].username, UUID : require('../models/UserList').Users[i].UUID});
        }
        return res;
    },
    getAllSockets: function () {
        var res = [];
        for (var i = 0; i < require('../models/UserList').Users.length; i++) {
            res.push(require('../models/UserList').Users[i].socket);
        }
        return res;
    },
    getUserFromSocket : function(socket){
        var res = {};
        require('../models/UserList').Users.map(user => {if(user.socket === socket)res = user});
        return res;
    }
}

module.exports = TOOLS;


