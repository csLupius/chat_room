var ChatController = {}
ChatController.DisplayChatLog = function chatcontroller_display(parent, data) {
    // console.log("chatcontroller_display1");
    
    var log;
    if (ConnectionController.connectionUser.UUID == data.sender.UUID 
        && ConnectionController.connectionUser.name == data.sender.name) {
        log = Object.create(UserChatLogView);
    } else {
        log = Object.create(StrangerChatLogView);
    }
    //console.log("chatcontroller_display2");
    log.initialize(parent);
    //console.log("chatcontroller_display3");
    
    log.SenderUsername(data.sender.name);
    //console.log("chatcontroller_display4");
    
    log.SenderMessage(data.message);
    // console.log("chatcontroller_display5");
    
    log.display();
}
