let menuabrir = document.querySelector(".abrir_menu");
let menufechar = document.querySelector(".fechar_menu");
let menumobile = document.querySelector(".menu_mobile");
let lista = document.querySelector(".ulmenu");
let modal = document.querySelector(".modal");
let texto = document.querySelector(".texto");
let texto1 = document.querySelector(".texto_1");
let texto2 = document.querySelector(".texto_2");
let proximo = document.querySelector(".proximo");
let conferir = document.querySelector(".conferir");
let som = document.querySelector(".som");
let abrir = document.querySelector(".abrir");
let desc = document.querySelector(".desc");
let historia = document.querySelector(".historia");
let remove = document.querySelector(".remover");

document.addEventListener("DOMContentLoaded", function () {
  var abrirMenu = document.querySelector(".abrir_menu");
  var fecharMenu = document.querySelector(".fechar_menu");
  var ulMenu = document.querySelector(".ulmenu");

  abrirMenu.addEventListener("click", function () {
    ulMenu.style.display = "block";
    abrirMenu.style.display = "none";
    fecharMenu.style.display = "inline";
  });

  fecharMenu.addEventListener("click", function () {
    ulMenu.style.display = "none";
    abrirMenu.style.display = "inline";
    fecharMenu.style.display = "none";
  });
});
proximo.addEventListener("click", () => {
  texto.style.display = "none";
  texto1.style.display = "block";
  texto2.style.display = "block";
  conferir.style.display = "block";
  proximo.style.display = "none";
});

conferir.addEventListener("click", () => {
  modal.style.display = "none";
  som.play();
});

abrir.addEventListener("click", () => {
  desc.style.display = "block";
  historia.style.heigth = "300px";
  remove.style.display = "block";
});

remove.addEventListener("click", () => {
  desc.style.display = "none";
  remove.style.display = "none";
  abrir.style.display = "block";
});
