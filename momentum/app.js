const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginButtonClick() {
    console.dir(loginInput.value);
    console.log("You Clicked!!!O.O", loginInput.value);
}

loginButton.addEventListener("click", onLoginButtonClick);
