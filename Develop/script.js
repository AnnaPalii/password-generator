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
  var userOptionsArray = [];
  var password 

    // prompt for length
    var length = prompt ("Please entre your password length.");

    // if length is NOT greater than 8 and less than 128
  // ALERT (must have password between 8  and 128 characters)

    while (length < 8 || length > 128) {
      alert ("Password must be between 8 to 128 characters");
      var length = prompt ("Please entre your password length.");
    }

   // confirm lowercase
    var lowercase = confirm ("Do you want lowercase?")
    // confirm uppercase
    var uppercase =confirm ("Do you want uppercase?");
   // confirm numeric
    var numeric = confirm ("Do you want numeric?");
   // confirm special characters
    var specialCharacter = confirm ("Do you want special character?");
  
    // check if at least one chrt chosen by the use is true
    if(lowercase == true) {

      // if var is confirmed add CharsArray to userOptionsArray

      var userOptionsArray= userOptionsArray.concat(lowerCaseArray);
      }

    if( uppercase == true) {

      var userOptionsArray = userOptionsArray.concat(upperCaseArray);
    }
    if( numeric == true) {

      var userOptionsArray = userOptionsArray.concat(numericCharacters);
    }
    if( specialCharacter == true) {
      
      var userOptionsArray = userOptionsArray.concat(specialCharacters);
    }

    console.log (userOptionsArray);

    if (lowercase == true || uppercase == true || numeric == true || specialCharacter == true) {

      console.log("calling generate password");
      var newPassword = generatePassword (length,userOptionsArray);
      return newPassword;
    
    }
    else if (lowercase == false && uppercase == false && numeric == false && specialCharacter == false) {
      alert ("Password must have values. Please click to Generate Password to start over.");
    }
} 

  // generate password 
  function generatePassword (len, UserOptionsArray) {

    console.log(len);
    console.log(UserOptionsArray);

    var userPassword = [];
  
    for (i =0; i < len; i++) {
      
    var  randomIndex = Math.floor(Math.random() * UserOptionsArray.length); 

    console.log(UserOptionsArray[randomIndex]);

    var  userPassword = userPassword.concat(UserOptionsArray[randomIndex]);

    // return password
    console.log(userPassword);
    // mutate an array to a string 
    var userPassword = userPassword.toString();
    }
    console.log("New password is generated");
    return userPassword;

    } 


// Write password to the #password input
function writePassword() {

  var password = PasswordPrompts();

  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
