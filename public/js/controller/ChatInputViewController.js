var ChatInputViewController = {
    view: Object.create(ChatInputView)
}
ChatInputViewController.Show = function _show(parent) {
    var self = this;
    this.view.initialize(parent);
    this.view.display();
    //TODO: do childNodes search instead of DOM search 
    this.view.$button = document.getElementById('chatButton');
    this.view.$input = document.getElementById('chatInput');
    //TODO: fix sweetborders class overrides textbox padding
    this.view.$input.classList.add('sweetborders');   
    this.view.$input.classList.add('textbox');
    this.view.$button.classList.add('send');
    this.view.$button.classList.add('sweetborders');    
    this.view.$input.focus();
    function _onchatsendresponsehandler(boolResponse, message =''){
        if(!boolResponse)
        {
            alert(message);
        }};

    function _sendMessageFunction(text){
        ConnectionController.SendMessage(text, _onchatsendresponsehandler);
        self.view.$input.value = '';}
    this.view.$input.onkeyup = function(e){
        if(self.view.$input.value && self.view.$input.value.length > 0)
        {
            if(e.key === "Enter"){
                //ConnectionController.SendMessage(self.view.$input.value, _onchatsendresponsehandler);
                _sendMessageFunction(self.view.$input.value);
            }
        }}
    this.view.$button.onclick = function _onChatSend(){
        //console.log("_onchatsend");
        //console.log(self.view.$input.value)
        if(self.view.$input.value && self.view.$input.value.length > 0)
            _sendMessageFunction(self.view.$input.value);
    };}
ChatInputViewController.Remove = function _remove() {
    this.view.remove();}