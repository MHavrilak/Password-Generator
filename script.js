var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+="
var plength = ""
var password = ""


var plength = parseInt(prompt( "Choose your password length."));
    while (plength < 8 && plength > 128) {
        alert("Please choose a different length.");
    }
var valspec = prompt("Do you want special characters?");
var valupp = prompt("Do you want UPPER CASE letters?");
var vallow = prompt("Do you want lower case letters?");
var valnum = prompt("Do you want numbers?");

if (valspec == null && valupp == null && vallow == null && valnum == null);

function values() {
for(var i=0; 1 <= plength; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
}
}

//add password to textbox
document.getElementById("password").values = password;