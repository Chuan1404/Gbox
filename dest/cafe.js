bgMenu(document.querySelector('.cafe__welcom'));
$('.grid__items--item').click(function() {
    $('.popup').css('display' , 'block');
    $(".popup__img").flickity('viewFullscreen')
})
$(document).ready(function() {
    $('.popup__img').flickity({
        contain: true,
        wrapAround: true,
        freeScroll: false,
        fullscreen: true,
        pageDots: false,
    });
})
$('.exit').click(function() {
    $('.popup').css({'display':'none'});
    $(".popup__img").flickity('exitFullscreen')
}) 
