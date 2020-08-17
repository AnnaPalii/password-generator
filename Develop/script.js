// Assignment Code
var generateBtn = document.querySelector("#generate");

function PasswordPrompts () {
// vars definitions
var length;
var lowercase = false;
var uppercase = false;
var numeric = false;
var specialCharacter = false;

// define arrays for each var 
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var userOptionsArray
var password 
  // prompt for length


  // if length is NOT greater than 8 and less than 128
  // ALERT (must have password between 8  and 128 characters)

  // confirm lowercase
  // confirm uppercase
  // confirm numeric
  // confirm special characters

  // check if at least one chrt chosen by the use is true
  
  // generate password 


  // if everything is correct - alert password
  // return password
}

// Write password to the #password input
function writePassword() {

//  call generatePassword
  var password = PasswordPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
