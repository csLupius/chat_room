var ChatController = {}
ChatController.AddChatLog = function chatcontroller_display(parent, data) {
    // console.log("chatcontroller_display1");
    
    var log;
    if (ConnectionController.connectionUser === data.sender) {
        log = Object.create(UserChatLogView);
    } else {
        log = Object.create(StrangerChatLogView);
    }
    //console.log("chatcontroller_display2");
    log.initialize(parent);
    //console.log("chatcontroller_display3");
    
    log.SenderUsername(data.sender);
    //console.log("chatcontroller_display4");
    
    log.SenderMessage(data.message);
    // console.log("chatcontroller_display5");
    
    log.display();
}
