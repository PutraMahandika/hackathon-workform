var jwt = localStorage.getItem("jwt");
var logoutButton = document.getElementById("logout");
var loginButton = document.getElementById("login");
var signupButton = document.getElementById("signup");
loginButton.style.display = "none";

if (jwt != null) {
    logoutButton.style.display = "block";
    loginButton.style.display = "none";
    signupButton.style.display = "none";
} else {
    logoutButton.style.display = "none";
    loginButton.style.display = "block";
    signupButton.style.display = "block";
}

function logout(){
    if (jwt != null) {
        localStorage.removeItem("jwt")
        localStorage.removeItem("role")
        window.location.href = "../bootstrap/login.html"
    }
}