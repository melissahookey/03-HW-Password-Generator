// Button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

// starts the prompts when the button is clicked
function generatePassword() {
  var length = passwordLength();
  var charList = writePassword();
  var genPassword = "";
  var i;
  for (1===0; 1 <= length; i++) {
      randomNum = Math.min(Math.floor(Math.random() * 100), charList.length - 1)
      genPassword += charList[randomNum];
  }
  printPassword(genPassword);

}

// length of the password
function passwordLength (){
    var inputLength = Number(prompt("Password length: Enter a number between 8 and 128."));
    if(inputLength < 8 || inputLength > 128) {
        alert("Please enter a number between 8 and 128")
        passwordLength();
    }
    return inputLength;
}

// variables, prompts, and responses
function writePassword() {
    var passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
    var passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordNumbers = "1234567890";
    var passwordSymbols = "!@#$%^&*()+=?/[]{}";
    var charList = "";
    var lowercaseList = confirm("Would you like to include lower case characters in the password?");
    var uppercaseList = confirm("Would you like to include upper case characters in the password?");
    var numbersList = confirm("Would you like to include numbers in the password?");
    var symbolsList = confirm("Would you like to include special characters in the password?");

    if (lowercaseList === true) {
        charList += passwordLowercase;
    }

    if (uppercaseList === true) {
        charList += passwordUppercase;
    }

    if (numbersList === true) {
        charList += passwordNumbers;
    }

    if (symbolsList === true) {
        charList += passwordSymbols;
    }
    console.log(charList);
    return charList;
}

// prints the generated password
function printPassword(password) {
    var passwordText = document.querySelector("#password");
    console.log(password);
    passwordText.value = password;
}

