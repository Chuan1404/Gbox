bgMenu(document.querySelector('.project_page'));

$(document).ready(function() {
    $(".Sproject__img").flickity({
        wrapAround: true,
        prevNextButtons: true,
        pageDots: false,
        fullscreen: true,
    });
    $('.Sproject__info--tool .full-screen').click(function() {
        $('.Sproject__img').flickity("viewFullscreen");
    })

})