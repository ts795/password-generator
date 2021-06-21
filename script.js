// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate the password based on the criteria the user has selected
function generatePassword() {
  // Get the number of characters that are desired for the password
  var numCharacters = prompt("Please enter the length of the password. It must be at least 8 characters and no more than 128 characters.");
  numCharacters = parseInt(numCharacters);
  // Make sure the number of characters is not null, NaN, less than 8, or greater than 128
  if (!numCharacters || (numCharacters < 8) || (numCharacters > 128)) {
    alert("Number of characters must be at least 8 characters and no more than 128 characters.");
    return "";
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
