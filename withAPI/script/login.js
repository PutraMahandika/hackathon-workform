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

  fetch("https://projectnabiha.my.id/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      "email": username,
      "password": password,
    }),
  })
    .then((response) => response.json())
    .then((objects) => {
      if ('access_token' in objects) {
        
        localStorage.setItem("jwt", objects['access_token']);
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            if (customer){
              localStorage.setItem("role", "customer")
              window.location.href = '../bootstrap/home.html';
            }else{
              localStorage.setItem("role", "owner")
              window.location.href = '../bootstrap/dashboard-mitra.html';
            }
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return false;
}

