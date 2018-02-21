var UserLoginController = {
    view: Object.create(UserLoginView)
}
UserLoginController.Remove = function _remove() {
    this.view.parent.removeChild(this.view.cElement);
}
UserLoginController.Show = function _show(parent) {
    var self = this;
    this.view.initialize(parent);
    this.view.display();
    this.view.cElement.classList.add('abs-center');
    this.view.$button = document.getElementById('userLoginButton');
    this.view.$button.classList.add('send');
    this.view.$button.classList.add('sweetborders');
    this.view.$input = document.getElementById('userLoginInput');
    this.view.$input.classList.add('half-textbox');
    this.view.$input.classList.add('sweetborders');
    this.view.$serverMessage = document.getElementById('loginServerMessage');
    this.view.$input.focus();
    function _loginHandler(result, data) {

        if (result) {
            self.Remove();
            ChatShellController.Show(document.body);
            ChatLogController.ShowAllActiveMessages(data.messages);
        } else {
            self.view.$serverMessage.innerText = data;
        }
    }
    this.view.$button.onclick = function _onLoginButonClicked (e) {
        if (self.view.$input.value && self.view.$input.value.length > 0) {
            ConnectionController.LoginWithUserName(self.view.$input.value, _loginHandler)
        }
    }
    //DONE: fix onKeypress event
    this.view.$input.onkeyup = function _onLoginInputKeyPressed(e){
        if(self.view.$input.value && self.view.$input.value.length > 0 ){
            if(e.key === "Enter"){
                ConnectionController.LoginWithUserName(self.view.$input.value,_loginHandler);
            }
        }
    }
};


