let heightHeader = document.querySelector('header')
let branch = document.querySelector('.branch');
let ham = document.querySelector('.hamberger');
let nav = document.querySelector('nav');
let menu = document.querySelector('.menu')
let aMenu = document.querySelectorAll('.menu-list li a');
let footerArrow = document.querySelector('.footer__arrow');
let input = document.querySelectorAll('.input__cols .item input')
let inputText = input.getA

function bgMenu(className) {
    window.addEventListener('scroll' , () => {
        if(window.pageYOffset > (className.offsetTop - branch.clientHeight)) {
            menu.style.backgroundColor = "#525355";
            menu.style.height= "40%";
            aMenu.forEach(function(item) {
                item.style.color = "#fff";
            })
        }
        else {
            menu.style.backgroundColor = "transparent";
            menu.style.height= "50%";
            aMenu.forEach(function(item) {
                item.style.color = "#171717";
            })
        }
    })
}

ham.onclick = function() {
    nav.classList.toggle('active')
}
// footer
footerArrow.onclick = () => {
    window.scrollTo(0 , 0);
}

