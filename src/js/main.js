import $ from './lib/lib';

$('.active').addClass('hello', 'world').setAttribute('attr01', '123').
setAttribute('attr02', 'asdsaz').removeAttribute('attr01');

$('button').click(function() {
    $(this).toggleClass('active');
});