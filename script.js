document.addEventListener('DOMContentLoaded', function(){
    const sbutton = document.getElementById("sbutton");
    const lbutton = document.getElementById("lbutton");

    if(sbutton){
        sbutton.addEventListener('click',SignIn);
    }

    if(lbutton){
        this.addEventListener('click',login);
    }


});

function SignIn(){
    const username = document.getElementById("SignIn-user").value;
    const pass = document.getElementById("SignIn-pass").value;
    const email = document.getElementById("SignIn-email").value;
    const mobile = document.getElementById("SignIn-mobile").value;

    if(username ==='' && pass ===''){
        alert("please fill all fields");
        return;
    }
  
    localStorage.setItem('username',username);
    localStorage.setItem('pass',pass);
    console.log("Sign In" ,{username,pass});
    alert("Sign In Successful");
    window.location.href = "login.html";
}

function login(){
    const username = document.getElementById("Login-Username").value;
    const pass = document.getElementById("Login-Password").value;
    
    if(username ==='' && pass ===''){
        alert("Fill all fields");
        return;

    }

    const storedUsername = localStorage.getItem('username');
    const stordPass = localStorage.getItem("pass");

    if(username === storedUsername && pass === stordPass){
        console.log("Login Successful",{username,pass});
        alert("Login Successfull");
        window.location.href="dashboard.html";
    } else{
        alert("fill Correct details");
    }
}