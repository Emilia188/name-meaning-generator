function generateNameMeaning(event) {
  event.preventDefault();

  new Typewriter("#description", {
    strings:
      "The name Emilia is of Latin origin and is derived from the Roman family name Aemilius.",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let nameFormElement = document.querySelector("#name-generator-form");
nameFormElement.addEventListener("submit", generateNameMeaning);
