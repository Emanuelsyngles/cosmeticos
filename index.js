let contact = document.getElementById("contact");
let fechado = document.getElementById("fechado");

sair.addEventListener("click", () => {
  contact.style.display = "none";
  fechado.style.display = "block";
});

fechado.addEventListener("click", () => {
  contact.style.display = "block";
  fechado.style.display = "none";
});
