"use strict";
import validacion from "./validacion.js";
const d = document;
const heroDesc = d.getElementById("hero-desc");
const servicios = d.getElementById("servicios");
const trabajos = d.getElementById("trabajos");
const contacto = d.getElementById("contacto");

function animacionHero() {
  setTimeout(() => {
    heroDesc.classList.add("reset-opacity");
  }, 470);
}
function animacionMain() {
  const distancias = window.innerHeight - servicios.getBoundingClientRect().top;

  console.log(distancias);

  if (distancias >= 130) {
    servicios.classList.add("reset-opacity");
    servicios.classList.remove("opacity");
    servicios.style.transition = "all ease-in-out 0.5s";
  } else {
    servicios.classList.add("opacity");
    servicios.classList.remove("reset-opacity");
  }

  if (distancias >= 890) {
    trabajos.classList.add("reset-opacity");
    trabajos.classList.remove("opacity");
    trabajos.style.transition = "all ease-in-out 0.5s";
  } else {
    trabajos.classList.add("opacity");
    trabajos.classList.remove("reset-opacity");
  }

  if (distancias >= 1590) {
    contacto.classList.add("reset-opacity");
    contacto.classList.remove("opacity");
    contacto.style.transition = "all ease-in-out 0.5s";
  } else {
    contacto.classList.add("opacity");
    contacto.classList.remove("reset-opacity");
  }
}
d.addEventListener("DOMContentLoaded", () => {
  animacionHero();
  validacion();
});
window.addEventListener("scroll", animacionMain);
