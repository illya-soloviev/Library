import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let startTime;

    function _animateOverTime(time) {
        if (!startTime) {
            startTime = time;
        }

        let timeElapsed = time - startTime;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
}

$.prototype.fadeIn = function(dur, display, fin) {
    for(let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }

    return this;
}

$.prototype.fadeOut = function(dur, fin) {
    for(let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection == 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
}

$.prototype._in = function(elem, disp) {
    const display = disp || 'block';
    const fadeIn = (complection) => {
        elem.style.display = display;
        elem.style.opacity = complection;
    };

    return fadeIn;
}

$.prototype._out = function(elem) {
    const fadeOut = (complection) => {
        elem.style.opacity = 1 - complection;
        if (complection === 1) {
            elem.style.display = 'none';
        }
    };

    return fadeOut;
}

$.prototype.fadeToggle = function(dur, display, fin) {
    for(let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            const disp = display || 'block';

            const fadeIn = this._in(this[i], disp);
            const ani = this.animateOverTime(dur, fadeIn);

            requestAnimationFrame(ani);
        } else {
            const fadeOut = this._out(this[i]);
            const ani = this.animateOverTime(dur, fadeOut, fin);

            requestAnimationFrame(ani);
        }
    }

    return this;
}