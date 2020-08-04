const navButton = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-links");
const header = document.querySelector("header");
const tituloPagina = document.querySelector("#titulo-pagina");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("menuAbierto");
  navMenu.classList.toggle("menuAbierto");
  if (navMenu.classList.contains("menuAbierto")) {
    header.style.background = " rgba(255,255,255, .9)";
    header.style.height = "5rem";
    tituloPagina.style.color = "#000";
  }
  if (!navButton.classList.contains("menuAbierto")) {
    header.style.background =
      " linear-gradient(rgba(0, 0, 0, .9) 0%, rgba(255,255,255,0) 100%)";
    tituloPagina.style.color = "#fff";
    header.style.height = "10rem";
  }
});
