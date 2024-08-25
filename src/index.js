function displayMeaning(response) {
  new Typewriter("#description", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateNameMeaning(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "a93d1e9t3900f64c3459obcda72aab15";
  let prompt = `User instructions: Generate the meaning of the name ${instructionInput.value}`;
  let context =
    "You are a knowledgeable AI Assistant who knows all the names worldwide. Please focus on the main aspects and provide answer in maximum 6 lines. Please follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.classList.remove("hidden");
  descriptionElement.innerHTML = `<div class = "generating">Just a moment ⏳...</div>`;

  axios.get(apiUrl).then(displayMeaning);
}

let nameFormElement = document.querySelector("#name-generator-form");
nameFormElement.addEventListener("submit", generateNameMeaning);
