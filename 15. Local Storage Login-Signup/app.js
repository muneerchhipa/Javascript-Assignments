// function signUp(){
//     var email = document.getElementById("semail").value
//     var pass = document.getElementById("spass").value
//    localStorage.setItem("Email",email)
//    localStorage.setItem("Password",pass)
//    location.href = 'login.html'
// }

// function logIn(){
//     var email = document.getElementById('lemail').value
//     var pass = document.getElementById('lpass').value
//     if(localStorage.getItem('Email') === email && localStorage.getItem('Password') === pass ){
//        alert("Login Successful!");
//         location.href ='welcome.html'
//     }
//     else {
//         alert('Invalid Credentials')
//         location.href = 'signup.html'
//     }
// }

// function logOut(){ 
//     location.href = 'login.html'
//     alert("Thankyou \n logout! ")
// }

                    // End

                    

var users = JSON.parse(localStorage.getItem('userData')) || [];

function signUp(){
    var nameValue = document.getElementById('sname').value.trim()
    var emailValue = document.getElementById('semail').value.trim()
    var passwordValue = document.getElementById('spass').value.trim()

    if(!emailValue || !passwordValue || !nameValue){
        alert('please fill all the fields')
        return;
    }


var id = Date.now();
var user = {
    Id : id,
    Name : nameValue,
    Email : emailValue,
    Password : passwordValue
};

users.push(user);
localStorage.setItem('userData',JSON.stringify(users));

alert('Signup successful!');
    location.href = './login.html';
}

function logIn(){
    var nameValue = document.getElementById('lname').value.trim()
var emailValue = document.getElementById('lemail').value
var passwordValue = document.getElementById('lpass').value

 var userFound = false;

 for(var index in users){
 var user = users[index]
 if(user.Email === emailValue && user.Password === passwordValue && user.Name === nameValue){

    alert("User Authenticated Successfully!");
        userFound = true;
        localStorage.setItem("currentUser", JSON.stringify(user));
        location.href = "welcome.html";
        break; // stop loop
 }
 
 }
 if (!userFound) {
        alert("User not found! Please signup.");
        location.href = "signup.html";
    }
}



// welcome page
if (document.getElementById("userEmail") ||document.getElementById("userName")) {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
        location.href = "login.html";
    } else {
        document.getElementById("userName").innerText = user.Name +",";
        document.getElementById("userEmail").innerText = user.Email;
    }
}

function logOut() {
    localStorage.removeItem("currentUser");
    location.href = "login.html";
}

