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

function generatePassword(){

  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var passwordPool = [];
  var passwordArray = [];

  var passwordLength;
  var lowercase;
  var uppercase;
  var numeric;
  var special;

  do {
    window.alert("First, please enter a valid length for your password (from 8 to 128)");
    passwordLength = window.prompt("How many characters do you want?", "Type in a number between 8 and 128");
  } while (passwordLength < 8 || passwordLength > 128 || !passwordLength || passwordLength.match(/[a-zA-Z]/) || passwordLength.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/));
  // Input values to passwordLength
  // repeatedly ask until valid character length has been justified
  // conditions included: length, refuse prompt, string, special characters

  do {
    window.alert("Please customize your password (choose one of them for the very least) or repeat");
    lowercase = window.confirm("Do you want to include lowercase characters?");
    uppercase = window.confirm("Do you want to include UPPERCASE characters?");
    numeric = window.confirm("Do you want to include numeric (0-9) characters?");
    special = window.confirm("Do you want to include special characters (e.g. @)?");
  } while (lowercase === false && uppercase === false && numeric === false && special === false);
  // Input preference of password by selection
  // At least one option is activated

  if (lowercase) {passwordPool=passwordPool.concat(lowercaseArray)};
  if (uppercase) {passwordPool=passwordPool.concat(uppercaseArray)};
  if (numeric) {passwordPool=passwordPool.concat(numericArray)};
  if (special) {passwordPool=passwordPool.concat(specialArray)};
  // Creation of password pool that has all preferred characters included (inclusion of all preferred options in a single pool)
}