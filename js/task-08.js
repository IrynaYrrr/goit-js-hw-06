const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password }
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log({email:email.value, password:password.value});
  evt.currentTarget.reset();
}
