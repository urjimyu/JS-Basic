const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("submit", onLoginSubmit);
