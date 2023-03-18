const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginButtonClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginButtonClick);
