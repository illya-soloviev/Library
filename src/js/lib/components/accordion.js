import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            const accordionHeads = [];
            for(let j = 0; j < this.length; j++) {
                accordionHeads.push(this[j]);
            }

            accordionHeads.forEach(accordionHead => {
                if (accordionHead !== this[i]) {
                    accordionHead.classList.remove(headActive);
                    accordionHead.nextElementSibling.classList.remove(contentActive);
                    accordionHead.nextElementSibling.style.maxHeight = '0px';
                } else {
                    accordionHead.classList.toggle(headActive);
                    accordionHead.nextElementSibling.classList.toggle(contentActive);
        
                    if (accordionHead.classList.contains(headActive)) {
                        accordionHead.nextElementSibling.style.maxHeight = accordionHead.nextElementSibling.scrollHeight + paddings +'px';
                    } else {
                        accordionHead.nextElementSibling.style.maxHeight = '0px';
                    }
                }
            });
        });
    }
}

$('.accordion-head').accordion();