var generateBtn = document.querySelector("#generate");

//variables for options


// Write password to the #password input
function writePassword() {
  //ref obj in here
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//WHEN user clicks on Generate PW button, 
generateBtn.addEventListener("click", showAlert);

//PROMPT user to input how many characters they want their pw to be.
function showAlert () {
  var userPwLength = prompt("How many characters do you want in your password? Your password must have no less than 8 characters and no more than 128 characters.");

//IF userPwLength is <8 || >128
//ALERT user to enter a password length of 8 to 128 characters
//ELSE ALERTS will pop up to confirm usage of special, uppercase, lowercase, and number characters
  if (userPwLength < 8 || userPwLength > 128){
    userPwLength = prompt("Enter a number from 8 to 128.");
  }
  else if (userPwLength >=8 || userPwLength <=128){
    console.log(userPwLength);
    var userPwLength = confirm("Password length set");
    //i want this to log the number, not 'true'
    var pwFinal = userPwLength + pwFinal;
  }

  if (userPwLength === true) {
    var specialChars = confirm("Do you want to use special characters in your password");
    var pwFinal = pwFinal + specialChars;
    //console.log(pwFinal);
  }
  
  if (specialChars === true) {
    console.log(specialChars);
    var pwFinal = pwFinal + specialChars;
    var upperChars = confirm("Do you want to use uppercase characters in your password?");
  }
  else if (specialChars != true) {
    console.log(specialChars);
    var upperChars = confirm("Do you want to use uppercase characters in your password?")
  }
  
  if (upperChars === true) {
    console.log(upperChars);
    var pwFinal = pwFinal + upperChars;
    var lowerChars = confirm("Do you want to use lowercase characters in your password?");
  }
  else if (upperChars != true) {
    console.log(upperChars);
    var lowerChars = confirm("Do you want to use lowercase characters in your password?")
  }

  if (lowerChars === true) {
    console.log(lowerChars);
    var pwFinal = pwFinal + lowerChars;
    var numChars = confirm("Do you want to use numbers in your password?");
  }
  else if (lowerChars != true) {
    console.log(lowerChars);
    var numChars = confirm("Do you want to use numbers in your password?")
  }
}

//if (specialChars != true && upperChars != true && lowerChars != true && numChars != true) {
  //alert("You must select at least one character type!")
//}

//function generateRandomChar (charSet) {
  //var randomChar = charSet[Math.floor(Math.random) * charSet.length];
  //return password = password + randomChar;


var pwFinal = " ";
console.log(pwFinal);


