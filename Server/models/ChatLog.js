var Chat = require('./Chat');
var EventHandler = require('../helpers/EventHandler');
var _chatlog = [];
var _onChatlogChanged = Object.create(EventHandler);
function _addChat(chat) {
    if (chat instanceof Chat) {
        _chatlog.push(chat);
        _onChatlogChanged.trigger(_chatlog);
        setTimeout(function _deleteChat(){
            _removeChat(chat);
        }, 1000 * 60 * 30); //30 DK ? // ((1000 = 1 sn) * 60) = 1 dk) * 30 = 30dk
        return true;
    }else return false;
}
function _removeChat(chat){
    if(chat instanceof Chat){
        //_users = _users.filter(x => x !== UserModel);
        var c = _chatlog.length;
        _chatlog = _chatlog.filter(x => x !== chat);
        if(_chatlog.length != c){
            _onChatlogChanged.trigger(_chatlog);
            return true;
        }else return false;
    }else return false;
}

function _addEventToEventHandler(callback) {
    _onChatlogChanged.push(callback);
}
var ChatLog = {
    Log: _chatlog,
    Add: _addChat,
    onChatlogChanged: _addEventToEventHandler
}
module.exports = ChatLog;