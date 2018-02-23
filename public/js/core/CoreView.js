"use strict";
var CoreView = {}
CoreView.name = '';
CoreView.parent = undefined;
CoreView.class = '';
CoreView.id = '';
CoreView.display = function _display(prepend = false) {
    if (!prepend)
        this.parent.append(this.cElement);
    else
        this.parent.prepend(this.cElement);
}
CoreView.initialize = function _init(parent) {
    this.cElement = document.createElement('div');
    this.parent = parent;

    if (this.id)
        this.cElement.id = this.id;
    if (this.class)
        this.cElement.classList.add(this.class);

    this.template = TemplateManager.load(this.name);
    this.cElement.innerHTML = this.template;
}
CoreView.remove = function _remove() {
    this.parent.removeChild(this.cElement);
}