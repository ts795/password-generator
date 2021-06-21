// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of lower case letters
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of upper case letters
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Special characters allowed for passwords from https://owasp.org/www-community/password-special-characters
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

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

  // Ask the user if they want lowercase characters
  var includeLowerCase = confirm("Press OK to include lower case characters in the password and CANCEL to not include them.");
  // Ask the user if they want uppercase characters
  var includeUpperCase = confirm("Press OK to include upper case characters in the password and CANCEL to not include them.");
  // Ask the user if they want numeric characters
  var includeNumeric = confirm("Press OK to include numeric characters in the password and CANCEL to not include them.");
  // Ask the user if they want special characters
  var includeSpecial = confirm("Press OK to include special characters in the password and CANCEL to not include them.");

  // Make sure 1 character type is included
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("You must select at least 1 character type");
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
