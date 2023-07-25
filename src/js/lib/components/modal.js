import $ from '../core';

$.prototype._calcScroll = function() {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

$.prototype.modal = function() {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click((e) => {
            e.preventDefault();

            const target = this[i].getAttribute('data-target');
            $(target).fadeIn(500);
            const scrollWidth = this._calcScroll();
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    });

    $('.modal').click((e) => {
        if (e.target && e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
}

$('[data-toggle="modal"]').modal();