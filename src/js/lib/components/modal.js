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

$.prototype.modal = function(createdByJS) {
    for(let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');

        $(this[i]).click((e) => {
            e.preventDefault();

            if (!createdByJS) {
                $(target).fadeIn(500);
            }

            const scrollWidth = this._calcScroll();
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (createdByJS) {
                    document.querySelector(target).remove();
                }
            });
        });
    
        $(target).click((e) => {
            if (e.target && e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (createdByJS) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
}

$.prototype.createModal = function({text, btns}) {
    for(let i = 0; i < this.length; i++) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];
        for(let j = 0; j < btns.count; j++) {
            const btn = document.createElement('button');

            const [text, classNames, close, callback] = btns.settings[j]
            btn.classList.add('btn', ...classNames);
            btn.textContent = text;
            if (close) {
                btn.setAttribute('data-close', 'true');
            }
            if (callback && typeof(callback) === 'function') {
                btn.addEventListener('click', callback);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.querySelector('.modal-footer').append(...buttons);
        $(this[i]).modal(true);
        $(modal).fadeIn(500);
    }
}