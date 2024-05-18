const userName = document.querySelector("#name-input");
const greetings = document.querySelector("h1");
const nameOutput = document.querySelector("#name-output");

userName.addEventListener("input", onUsernameInput);

function onUsernameInput() {
  const value = userName.value.trim();
  if (value) {
    nameOutput.textContent = value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
