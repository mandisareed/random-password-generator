var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //ref obj in here
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//    WHEN user clicks on Generate PW button, 
 
generateBtn.addEventListener("click", showAlert);

//    PROMPT user to input how many characters they want their pw to be.

function showAlert () {
  var userPwLength = prompt("How many characters do you want in your password? Your password must have no less than 8 characters and no more than 128 characters.");
  (userPwLength);

//IF userPwLength is <8 || >128
//ALERT user to enter a password length of 8 to 128 characters
//ELSE ALERTS will pop up to confirm usage of special, uppercase, lowercase, and number characters

  if (userPwLength < 8 || userPwLength > 128){
    userPwLength = prompt("Enter a number from 8 to 128.");
  }
    else {
    var specialChars = confirm("Do you want to use special characters in your password");
    var upperChars = confirm("Do you want to use uppercase characters in your password?");
    var lowerChars = confirm("Do you want to use lowercase characters in your password?");
    var numChars = confirm("Do you want to use numbers in your password?");
   }
}

//if (specialChars != true && upperChars != true && lowerChars != true && numChars != true){
  //alert("You must select at least one character type!")
//}


//Store the 5 answers (length and 4 character types) in an object

var userAnswers = {
  userPwLength: "",
  specialChars: "!@#$%^&*()",
  upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerChars: "abcdefghijklmnopqrstuvwxyz",
  numChars: "0123456789",
};

 

 



   




  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//CONFIRM: Do you want your pw to include special chars?
   // IF user clicks "ok", include special chars in pw
   // ELSE do not include special chars in pw