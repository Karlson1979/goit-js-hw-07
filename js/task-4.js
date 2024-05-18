const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }
  const data = { email, password };
  console.log(data);
});
