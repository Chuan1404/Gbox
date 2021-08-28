bgMenu(document.querySelector('.stuSli'))
let heightSlider = '475px';
$(document).ready(function() {
    $('.stuSli__items').flickity({
        wrapAround: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        fullscreen: true,
    });
    $('.btn_control .--next').on('click' , function(e) {
        e.preventDefault();
        $('.stuSli__items').flickity('next');
    })
    $('.btn_control .--prev').on('click' , function(e) {
        e.preventDefault();
        $('.stuSli__items').flickity('previous');
    })
    $('.stuSli__controls .full-screen').on('click' , function() {
        $('.stuSli__items').flickity('toggleFullscreen');
    })

})
window.onresize = function() {
    document.querySelector('.stuSli__items .flickity-viewport').style.height = heightSlider;
}

