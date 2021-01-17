function login(){
    var local_user = window.localStorage.getItem("ulocal");
    var local_pass = window.localStorage.getItem("plocal");
    var text = document.getElementById("uname");
    var username = text.value;
    var text2 = document.getElementById("password");
    var pass = text2.value;
    if (local_user != username || local_pass != pass) {
        alert("Incorrect username or password!");
        return false;
    }
    else{
        true;
    }
}