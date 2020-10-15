// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var charLength = null;
  while(true) {
    charLength = parseInt(prompt("Choose your character length, the value must be between 8, and 128."));
    if (isNaN(charLength)) {
      alert("Those aren't numbers!!");
    } else if (charLength < 8 || charLength > 128) {
      alert("Hey, that is not with in our perameters!"); 
    } else {
        break;
    } 
  } 
  var capitalLetters = confirm("Would you like Capital Letters?");
  var lowerCase = confirm("Would you like lowercase letters?");
  var upperCase = confirm("Would you like uppercase letters?");
  var includeNumbers = confirm("Would you like numbers in your password?");
  var specialCharactars = confirm("Would you like special characters?");

  console.log(charLength);


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

