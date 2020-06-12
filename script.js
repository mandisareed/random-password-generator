var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// pseudo code
//    WHEN user clicks on Generate PW button, 
//    PROMPT user to input how many characters they want their pw to be. 

function showAlert () {
  var userChars = prompt("How many characters do you want in your password? Your password must have no less than 8 characters and no more than 128 characters.");
  (userChars);
}

  generateBtn.addEventListener("click", showAlert);


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);