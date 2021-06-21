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

// Random integer function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

  // Characters to choose from for the password
  var charactersToChooseFrom = [];
  // Characters chosen for the password
  var charactersChosenForPassword = [];

  if (includeLowerCase) {
    // Add the lower case characters to the characters to choose from
    charactersToChooseFrom = charactersToChooseFrom.concat(lowerCaseLetters);
    // Choose a lower case character so there is at least one in the password
    charactersChosenForPassword.push(lowerCaseLetters[getRandomInt(lowerCaseLetters.length)]);
    numCharacters--;
  }

  if (includeUpperCase) {
    // Add the upper case characters to the characters to choose from
    charactersToChooseFrom = charactersToChooseFrom.concat(upperCaseLetters);
    // Choose a upper case character so there is at least one in the password
    charactersChosenForPassword.push(upperCaseLetters[getRandomInt(upperCaseLetters.length)]);
    numCharacters--;
  }

  if (includeNumeric) {
    // Add the numeric characters to the characters to choose from
    charactersToChooseFrom = charactersToChooseFrom.concat(numericCharacters);
    // Choose a numeric character so there is at least one in the password
    charactersChosenForPassword.push(numericCharacters[getRandomInt(numericCharacters.length)]);
    numCharacters--;
  }

  if (includeSpecial) {
    // Add the special characters to the characters to choose from
    charactersToChooseFrom = charactersToChooseFrom.concat(specialCharacters);
    // Choose a special character so there is at least one in the password
    charactersChosenForPassword.push(specialCharacters[getRandomInt(specialCharacters.length)]);
    numCharacters--;
  }

  // Choose the remaining characters
  for (var i = 0; i < numCharacters; i++) {
    charactersChosenForPassword.push(charactersToChooseFrom[getRandomInt(charactersToChooseFrom.length)]);
  }

  // Return the chosen characters as one string
  return charactersChosenForPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
