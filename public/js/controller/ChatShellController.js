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
    
    ChatLogController.view.cElement.style.maxHeight = (parseInt(parent.style.height, 10) - (ChatInputViewController.view.cElement.offsetHeight)) + "px";
}