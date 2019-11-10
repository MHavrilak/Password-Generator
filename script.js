var valuesUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var valuesLow = "abcdefghijklmnopqrstuvwxyz"
var valuesNum = "1234567890"
var valuesSpec = "!@#$%^&*()_-+="
var plength = ""
var password = ""
var valuesTot = ""

// Generator Function
function genpassword()

// Initial Prompts
var plength = parseInt(prompt( "Choose your password length."));
    while (plength < 8 || plength > 128) {
        alert("Please choose a different length.");
    }
var valspec = prompt("Do you want special characters?");
var valupp = prompt("Do you want UPPER CASE letters?");
var vallow = prompt("Do you want lower case letters?");
var valnum = prompt("Do you want numbers?");

if (valspec == null && valupp == null && vallow == null && valnum == null);

if (valspec != null){
    values = values + "!@#$%^&*()_-+="
}else {
    values = values + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}else {
    values = values + "abcdefghijklmnopqrstuvwxyz"
}else {
    values = values + "1234567890"
}

// Random password funtion
function values() {
for(var i=0; 1 <= plength; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
}
}
return password;

//add password to textbox
document.getElementById("password").values = password;