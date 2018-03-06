var User = require('../models/User');
var UserList = require('../models/UserList');
var UserListTools = require('../helpers/UserListTools');
var EventHandler = require('../helpers/EventHandler');

var _onUsersChanged = Object.create(EventHandler);
function _addNewUser(nUser) {
    //console.log("_addNewUser1" + UserModel.username);
    if (nUser instanceof User) {
        //  console.log("_addNewUser2");
        if (!UserListTools.checkUsernameExists(nUser)) {
            //    console.log("_addNewUser3");
            nUser.UUID = require('node-uuid').v1();
            UserList.Add(nUser);
            //  console.log("_addNewUser4");
            _onUsersChanged.trigger(UserListTools.getAllUserInfo());
            // console.log("_addNewUser5 " +  UserListTools.getAllUsernames());
            return true;
        } else {
            return false;
        }
    }
}
function _removeUser(nUser) {
    if (nUser instanceof User)
        //console.log('ULC_removeUser1 ' + UserModel.username );
    if (UserListTools.checkUsernameExists(nUser.username)) {
        //console.log('ULC_removeUser2')
        UserList.Remove(nUser);
        _onUsersChanged.trigger(UserListTools.getAllUserInfo());
        return true;
    } else {
        return false;
    };
}
function addEventonUsersChanged(callback) {
    //if (callback == 'function') { //function'mı diye kontrol etmek iyi olucaktır
    _onUsersChanged.push(callback);
    //}
}
var UserListController = {
    AddUser: _addNewUser,
    RemoveUser: _removeUser,
    onUsersChanged: addEventonUsersChanged
};

module.exports = UserListController;