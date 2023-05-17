// Assignment code here
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// document.getElementById("myBtn").addEventListener("click", displaydate);

// reworking code
function generatePassword() {
    var pastleg = prompt("How long do you want your password to be? (8 - 128)", "12");
    console.log(pastleg)
    if (pastleg <= 8 || pastleg >= 128 ){
        alert("Not accepted criteria");
        generatePassword();
    }
    var uppercase = confirm ("Enter the number of uppercase characters you want. (0-2)", "2");
    if (!uppercase){
        // concat my charset
        charset = charset.toLowerCase();

    }
    console.log(uppercase)
    var specialchars = confirm("Enter the number of Special Characters you want. (0 - 2)", "2");
    if (!specialchars){
        // concat my charset
        charset = charset.replace(/[@!#$%^&*()+]/g,'');

    }
    console.log(specialchars)
    var nums = confirm("Enter how many digits you want. (0 - 2)", "2");
    if (!nums){
        // concat my charset
        charset = charset.replace(/\d/g,'')

    }
    console.log(nums)
    if (!uppercase){
    }


    for (var i = 0; i <=pastleg; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.charAt;
    n = charset.length;
    return generatePassword
    

// n = charset.length;
}   
}