var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword()  {

var passwordLength = parseInt(prompt('Please select a password length between 8-128.'))
  if (passwordLength < 8 || passwordLength > 128) {
      alert('Length must be between 8-128.');
      return writePassword();
  } 

  var confirmNumberCharacter = confirm("Would you like numbers in your password");
  var confirmUpperCase = confirm("Would you like upper case letters in your password");
  var confirmLowerCase = confirm("Would you like lower case letters in your password");
  var confirmSpecialCharacter = confirm("Would you like special characters in your password"); 

   // if statement to check if they select at least one of the requirements for pw

 var userSelectedOptions = {
   passwordLength: passwordLength,
   confirmNumberCharacter: confirmNumberCharacter,
   confirmUpperCase: confirmUpperCase,
   confirmLowerCase: confirmLowerCase,
   confirmSpecialCharacter: confirmSpecialCharacter
 };
 console.log(userSelectedOptions)
 return userSelectedOptions
}

var passwordOptions = writePassword() 
console.log(passwordOptions)
// write a funcvtion that takes in the users input options that based on the options
  var generatePassword = (passwordOptions) => {
    console.log(passwordOptions)
    var newPassword = ''
    var charSets = []
    if (passwordOptions.confirmNumberCharacter){
      charSets = charSets.concat(number)
    }
if (passwordOptions.confirmLowerCase){
  charSets = charSets.concat(lowerCase)
}
if (passwordOptions.confirmUpperCase){
  charSets = charSets.concat(upperCase)
}
if (passwordOptions.confirmSpecialCharacter){
  charSets = charSets.concat(specialChar)
}

    console.log(charSets)

    for (let i = 0; i < passwordOptions.passwordLength; i++) {
      var randomCharIndex = Math.floor(Math.random() * charSets.length )
      newPassword = newPassword + charSets[randomCharIndex];
      
    }

    return newPassword
  }



  var newPassword = generatePassword(passwordOptions)
  console.log('newPassword: ', newPassword) 
  
  alert(newPassword)
