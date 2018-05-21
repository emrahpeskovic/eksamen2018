var attempt = 3;

function LogIn(){
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "1234"){
alert ("You are now logged in!");
window.location = "index.html";
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
