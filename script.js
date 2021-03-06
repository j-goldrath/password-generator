// Assignment Code
var generateBtn = document.querySelector("#generate");


// create arrays of variables to use for validating password requirements
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// function to prompt user for password requirements criteria and validate input
function userInput() {
  userChoice = [];

  lengthChoice = parseInt(prompt("How many characters long would you like your password to be? (min. 8 - max. 128)."));

  if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    alert("Password length must be bewteen 8 and 128 characters.");
  return false;
  }
  if (confirm("Would you like to allow uppercase characters? (i.e. A,B,C,D...")) {
    userChoice = userChoice.concat(upperCaseCharacters);
  }
  if (confirm("Would you like to allow lowercase characters? (i.e. a,b,c,d...")) {
    userChoice = userChoice.concat(lowerCaseCharacters);
  }
  if (confirm("Would you like to allow numeric characters? (i.e. 1,2,3,4...")) {
    userChoice = userChoice.concat(numericCharacters);
  }
  if (confirm("Would you like to allow special characters? (i.e. @,#,$,%...)")) {
    userChoice = userChoice.concat(specialCharacters);
  }

  return true;
}

// Generate password by prompting user for password criteria
function generatePassword() {

  var newPassword = "";

  for (var i = 0; i < lengthChoice; i++) {
    var random = Math.floor(Math.random() * userChoice.length);
    newPassword = newPassword + userChoice[random];
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var input = userInput();

  if (input) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  