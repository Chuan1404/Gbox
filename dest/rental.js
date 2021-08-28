bgMenu(document.querySelector('.rental'))
let renBox = document.querySelectorAll('.renboxes .renboxes__item');
let selectBox = document.querySelectorAll('.reninput__book .select-box .items .number-box')

selectBox.forEach(function(item , index) {
    item.onclick = () => {
        selectBox.forEach((it) => {
            it.classList.remove('active')
        })
        renBox.forEach((e) => {
            e.classList.remove('active')
        })
        item.classList.add('active')
        renBox[index].classList.add('active')

    }
})
