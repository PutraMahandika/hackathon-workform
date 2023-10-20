var role = localStorage.getItem("role");

if(role != "owner"){
    window.location.href = "../bootstrap/home.html";
}