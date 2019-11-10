var valuesUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var valuesLow = "abcdefghijklmnopqrstuvwxyz";
var valuesNum = "1234567890";
var valuesSpec = "!@#$%^&*()_-+=";
var plength = "";
var password = "";
var values = "";





// Generator Function
function genpassword(){

    // Initial Prompts
    plength = parseInt(prompt( "Choose your password length."));
  
    
    if(plength < 8 || plength > 128){
        alert('bad length')
        genpassword();    
    }

    var valspec = prompt("Do you want special characters?");
    var valupp = prompt("Do you want UPPER CASE letters?");
    var vallow = prompt("Do you want lower case letters?");
    var valnum = prompt("Do you want numbers?");

    if (valspec.toLowerCase() == 'y')
        values = values + "!@#$%^&*()_-+=";
        console.log(values);
    if (valupp.toLowerCase() == 'y') 
        values = values + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(values);
    if (vallow.toLowerCase() == 'y')  
        values = values + "abcdefghijklmnopqrstuvwxyz";
        console.log(values);
    if (valnum.toLowerCase() == 'y')
        values = values + "1234567890";
        console.log(values);
}


// Random password funtion
function getvalues() {
    console.log(values.length);
    console.log(values);
    for(var i=0; i <= plength; i++) {
        password = password + values.charAt(Math.floor(Math.random() * (values.length -1)));
        console.log(values.charAt(Math.floor(Math.random() * (values.length - 1))))
    }
    console.log(password);
    document.getElementById("test_password").value = password;
}



