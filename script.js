// Array of characters which can be included in password;
//var specialCharacters;
//var numericCharacters;
//var lowercaseCharacters;
//var uppercaseCharacters;

// special characters which can be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// numeric characters which can included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// lowercase characters which can be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// uppercase characters which can included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// this is to prompt user for password options
function getPasswordOptions() {
  // Here, i am asking, for length of password from user.
  var length = parseInt(
    prompt('How many characters would you like in your password?'));

// this will prompt user for length of password in number form.
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;}

  // this is to check if password length is min 10 characters long
  if (length < 10) {
    alert('Password length must be at least 10 characters');
    return;}

  // this is to check if password length is less than or equals to 64 characters long. Cannot be 65 or more or it will alert user.
  if (length > 64) {
    alert('Password length must less than 65 characters');
    return;}

  //this is to check if user wants to include special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.');

  // this is to check if user wants to include numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.');

  // this is to check if user wants to include lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.');

  // this is to check if user wants to include uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.');

    // if the user hasnt included or selected any of the charahcter types above. he will be alerted here, that the password needs to contain at least one type of charcahters.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) { alert('Must select at least one character type');
    return;}

  // finalsises what the user has selected at prompts.
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters};

  return passwordOptions;
}

// this is getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();

  // store password as it's being concatenated
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  // if user wants to include special characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  //if user wanted numeric chaarcters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  //if user wanted lowercased characters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // if user wanted uppercased characters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // this will loop through each possible character randomly
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }
 
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // returns result
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

// write password to button.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);