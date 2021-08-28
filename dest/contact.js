bgMenu(document.querySelector('.contact__welcom'))
let contactInfo = document.querySelector('.contact');
let footerContact = document.querySelector('#footer_contact .footer_input');

window.onresize = () => {
    if (window.innerWidth <= 767)
    footerContact.style.height = (window.innerHeight - heightHeader.clientHeight - contactInfo.clientHeight) + 'px';
    else footerContact.style.height = 'auto';
}
