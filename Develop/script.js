// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}


var lengthOfPassword = 0

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    lengthOfPassword = parseInt(prompt('length of password (8-128): '))
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      alert('Please enter a number between 8-128');
    }
  } 
  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    confirmNumberCharacter = confirm("Would you numbers in your password");
    confirmUpperCase = confirm("Would you like upper case letters in your password");
    confirmLowerCase = confirm("Would you like lower case letters in your password");
    confirmSpecialCharacter = confirm("Would you like special characters in your password");
  }
    
  

  
  

  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"]

  var confirmLength = "";
  var confirmSpecialCharacter;
  var confirmNumberCharacter;
  var confirmUpperCase;
  var confirmLowerCase;

  var generatePassword = (passwordLength) => {
    

    for (let i = 0; i < passwordLength; i++) {
      var randomCharIndex = Math.floor(Math.random() * 26)
      password = password + lowerCase[randomCharIndex];
      password = password + upperCase[randomCharIndex];
      password = password + number[randomCharIndex];
      password = password + specialChar[randomCharIndex];
    }

    return password
  }

  var generatedPassword = generatePassword(lengthOfPassword)
  console.log('generatedPassword: ', generatedPassword)
  console.log('generatedPassword: ', generatedPassword.length)
  alert(generatedPassword)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
