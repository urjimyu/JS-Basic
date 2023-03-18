const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginButtonClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is tooooo long.");
    }
}

loginButton.addEventListener("click", onLoginButtonClick);
