//Menu Hamburguer
const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".nav-list");

hamburguer.addEventListener('click', () => nav.classList.toggle("active"));