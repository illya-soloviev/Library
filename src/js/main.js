import $ from './lib/lib';

$('.active').addClass('hello', 'world').setAttribute('attr01', '123').
setAttribute('attr02', 'asdsaz').removeAttribute('attr01');

$('button').click(function() {
    $(this).html('fafaf');
});

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').find('.more'));