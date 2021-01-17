const fs = require("fs");
function signup() {
    var text = document.getElementById("uname");
    var pass = document.getElementById("password")
    password = pass.value;
    username = text.value;
    if (username == "" || password == "") {
        alert("Blank space not allowed");
        return false;
    }
    if (username.length < 3) {
        alert("username should be greater than 3 characters!");
        return false;
    }
    if (password.length < 6) {
        alert("Password strength : weak (min : 6 characters are required)");
        return false;
    }
    else{
        true;
    }

    window.localStorage.setItem("ulocal", username);
    window.localStorage.setItem("plocal",password);
}
