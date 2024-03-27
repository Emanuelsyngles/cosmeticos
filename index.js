let menuclose = document.querySelector('#menuclose')
let lista = document.querySelector('#ulmenu')
let menumobile = document.querySelector('.menu_mobile')
let menustop = document.querySelector('#menustop')

function menufechado() {
    lista.style.display = 'block'
    menumobile.style.background = '#244b55'
    menuclose.style.display = 'none'
    menustop.style.display = 'block'
}

function fecharmenu() {
    lista.style.display = 'none'
    menumobile.style.background = '#BEC2B1'
    menuclose.style.display = 'block'
    menustop.style.display = 'none'
    menustop.style.background = '#fff'
}

