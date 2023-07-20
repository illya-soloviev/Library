import $ from '../core';

$.prototype.setAttribute = function(attrName, attrValue) {
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }
    return this;
}

$.prototype.removeAttribute = function(attrName) {
    for(let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attrName);
    }
    return this;
}