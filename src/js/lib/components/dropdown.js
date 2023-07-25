import $ from '../core';

$.prototype.dropdown = function() {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            const id = this[i].getAttribute('id');
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
}

$('.dropdown-toggle').dropdown();