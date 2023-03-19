const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

function handleLinkClick(event) {
    alert("clicked!");
}

loginButton.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
