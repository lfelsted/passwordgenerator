// Assignment Code
var generateBtn = document.querySelector("#generate");
//This is when i reset
var capitalLetters = null;
var lowerCase = null;
var includeNumbers = null;
var specialCharacters = null;
var password_length = 0;
var lowerCaseOp = "abcdefghijklmnopqrstuvwxyz";
var upperCaseOp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersOp = "0123456789";
var specialCharOp = " !\"#$%^&*()_+=-;:\\'?>,.~`|][}{";
var options = [];
var password = "";

function generatePassword() {
  while (true) {
    password_length = parseInt(
      prompt(
        "Choose your character length, the value must be between 8, and 128."
      )
    );
    if (isNaN(password_length)) {
      alert("Those aren't numbers!!");
    } else if (password_length < 8 || password_length > 128) {
      alert("Hey, that is not with in our perameters!");
    } else {
      break;
    }
  }

  capitalLetters = confirm("Would you like Capital Letters?");
  lowerCase = confirm("Would you like lowercase letters?");
  includeNumbers = confirm("Would you like numbers in your password?");
  specialCharacters = confirm("Would you like special characters?");

  if (lowerCase) options.push(lowerCaseOp);
  if (capitalLetters) options.push(upperCaseOp);
  if (includeNumbers) options.push(numbersOp);
  if (specialCharacters) options.push(specialCharOp);

 

  for (let index = 0; index < password_length; index++) {
    var characterSetIndex = Math.floor(Math.random() * options.length);
    var characterSet = options[characterSetIndex];
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    var randomCharacter = characterSet[randomIndex];
    password += randomCharacter;
  }
  return password

}

// Write password to the #password input
function writePassword() {
  var passwordResult = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordResult;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
