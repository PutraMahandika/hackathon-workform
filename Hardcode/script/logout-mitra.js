var role = localStorage.getItem("role");
const logoutButton = document.getElementById("logout");

if(role != "owner"){
    logoutButton.style.display = "none";
}