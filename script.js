// Assignment Code
var generateBtn = document.querySelector('#generate');
var specChar = '!@#$%^&*()';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add Prompt functions
function generatePassword() {
  var passLength = prompt('Enter the number of characters you wish to include in your password. You must enter more than 8 and less than 128.');

  var upCase = confirm('Include UPPER CASE characters?');

  var loCase = confirm('Include LOWER CASE characters?');
  
  var number = confirm('Include NUMBER characters?');

  var special = confirm('Include SPECIAL characters?');

  // Add empty minimum value
  var minimumCount = 0;

  var minimumUpCase = '';

  var minimumLoCase = '';

  var minimumNumber = '';

  var minimumSpecial = '';

  // Password generator functions
  var genFunctions = {
    getUpCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    getLoCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    getNumber: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 49);
    },
    getSpecial: function() {
      return specChar[Math.floor(Math.random() * specChar.length)];
    }

  };
  // Checks to see which characters were selected
  if (upCase === true) {
    minimumUpCase = genFunctions.getUpCase();
    minimumCount++;
  }
  if (loCase === true) {
    minimumLoCase = genFunctions.getLoCase();
    minimumCount++;
  }
  if (number === true) {
    minimumNumber = genFunctions.getNumber();
    minimumCount++;
  }
  if (special === true) {
    minimumSpecial = genFunctions.getSpecial();
    minimumCount++;
  }

  var passGen = '';

// Gets random character from potential characters
  function genRandomChar()  {
    while(true) {
    choice = Math.floor(Math.random() * 4)
    
    if (choice == 0 && upCase === true) {
      return genFunctions.getUpCase();
    }
    if (choice == 1 && loCase === true) {
      return genFunctions.getLoCase();
    }
    if (choice == 2 && number === true) {
      return genFunctions.getNumber();
    }
    if (choice == 3 && special === true) {
      return genFunctions.getSpecial();
    }  
  }
  }

  if (upCase === false && loCase === false && number === false && special === false) {
    return passGen
  }
  
  for (let i=0; i < (parseInt(passLength) - minimumCount); i++) {
    passGen += genRandomChar();
  }

  passGen += minimumUpCase;
  passGen += minimumLoCase;
  passGen += minimumNumber;
  passGen += minimumSpecial;

  return passGen;
   
}