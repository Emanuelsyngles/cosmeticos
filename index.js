let menuclose = document.querySelector('#menuclose')
let lista = document.querySelector('#ulmenu')
let menumobile = document.querySelector('.menu_mobile')
let menustop = document.querySelector('#menustop')
let modal = document.querySelector('.modal')
let texto = document.querySelector('.texto')
let texto1 = document.querySelector('.texto_1')
let texto2 = document.querySelector('.texto_2')
let proximo = document.querySelector('.proximo')
let fechar = document.querySelector('.fechar')
let conferir = document.querySelector('.conferir')
let som = document.querySelector('.som')
som.volume = 0.1;

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

fechar.addEventListener('click', () => {
    modal.style.display = 'none'
})

proximo.addEventListener('click', () => {
    texto.style.display = 'none'
    texto1.style.display = 'block'
    texto2.style.display = 'block'
    conferir.style.display = 'block'
    proximo.style.display = 'none'
})

conferir.addEventListener('click', () => {
    modal.style.display = 'none'
    som.play()
})








