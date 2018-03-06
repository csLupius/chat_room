var ChatShellController = {
    view: Object.create(ChatShellView)
}
ChatShellController.Show = function _chatShellShow(parent) {
    var self = this;
    this.view.initialize(parent);
    this.view.cElement.innerHTML = '';
    this.view.display();

    ChatInputViewController.Show(this.view.cElement);
    ChatLogController.Show(this.view.cElement);


    if (self.view.parent === document.body) {
        window.onresize = function () {
            //ChatLogController.view.cElement.style.maxHeight = (window.innerHeight - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
            //ChatLogController.view.cElement.style.height = (window.innerHeight - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
            ChatLogController.view.cElement.style.maxHeight = (window.innerHeight - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
        }
    } else {
        ChatLogController.view.cElement.style.maxHeight = (parseInt(parent.style.height, 10) - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
        self.view.parent.onresize = function () {
            //ChatLogController.view.cElement.style.height = (parseInt(parent.style.height, 10) - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
            ChatLogController.view.cElement.style.maxHeight = (parseInt(parent.style.height, 10) - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
        }
    }

}