var jwt = localStorage.getItem("jwt");
var role = localStorage.getItem("role")

if (jwt != null) {
  if(role == "customer"){
    window.location.href = "../bootstrap/home.html";
  }else{
    window.location.href = '../bootstrap/dashboard-mitra.html';
  }
}

function login() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  var customer = document.getElementById("customer").checked;
  const registeredEmail = "user@email.com";
  const registeredPass = "password";

  if (username == registeredEmail && password == registeredPass){
    localStorage.setItem("jwt", "loggedIn");
    if (customer){
      localStorage.setItem("role", "customer")
      window.location.href = '../bootstrap/home.html';
    }else{
      localStorage.setItem("role", "owner")
      window.location.href = '../bootstrap/dashboard-mitra.html';
    }
  } else{
    alert("Email atau password salah! silahkan cek kembali")
  }
}

