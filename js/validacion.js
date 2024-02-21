"use strict";
const d = document;

export default function validacion() {
  const form = d.querySelector(".contact-form");
  const ipt = d.querySelectorAll(".contact-form [required]");

  console.log(ipt);

  ipt.forEach((input) => {
    const span = d.createElement("span");
    span.id = input.name; //asignacion de id para el valor que del input
    span.textContent = input.title;
    span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", span); //posiciona el span debajo del input
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let input = e.target;

      //si es un input valida aplica el pattern, si es textarea valido data-pattern
      let pattern = input.pattern || input.dataset.pattern;

      if (pattern) {
        let expReg = new RegExp(pattern);
        return !expReg.exec(input.value)
          ? d.getElementById(input.name).classList.add("is-active")
          : d.getElementById(input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return input.value === ""
          ? d.getElementById(input.name).classList.add("is-active")
          : d.getElementById(input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando formulario");

    const loader = d.querySelector(".contact-form-loader");
    const response = d.querySelector(".contact-form-response");

    loader.classList.remove("none");

    setTimeout(() => {
      loader.classList.add("none");
      response.classList.remove("none");
      form.reset();
      setTimeout(() => response.classList.add("none"), 2500);
    }, 2500);
  });
}
