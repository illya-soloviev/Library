import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            for(let j = 0; j < this.length; j++) {
                if (this[j] !== this[i]) {
                    this[j].classList.remove(headActive);
                    this[j].nextElementSibling.classList.remove(contentActive);
                    this[j].nextElementSibling.style.maxHeight = '0px';
                } else {
                    this[i].classList.toggle(headActive);
                    this[i].nextElementSibling.classList.toggle(contentActive);
        
                    if (this[i].classList.contains(headActive)) {
                        this[i].nextElementSibling.style.maxHeight =this[i].nextElementSibling.scrollHeight + paddings +'px';
                    } else {
                        this[i].nextElementSibling.style.maxHeight = '0px';
                    }
                }
            }
        });
    }
}

$('.accordion-head').accordion();