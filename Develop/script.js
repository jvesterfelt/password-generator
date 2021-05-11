// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEGGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$^&*~?";
var setCriteria = "";
var password;

// Write password to the #password input
function writePassword() {

    //Establish password criteria
    var confirmLowerCase = confirm("Would you like to use lowercase letters?");
    var confirmUpperCase = confirm("Would you like to use capital letters?");
    var confirmNumbers = confirm("Would you like to use numbers?");
    var confirmSpecialChar = confirm("Would you like to use special characters?");

    if (confirmLowerCase) {
        if (confirmUpperCase) {
            if (confirmNumbers) {
                if (confirmSpecialChar) {
                    setCriteria = lowerCase + upperCase + numbers + specialChar;
                } else {
                    setCriteria = lowerCase + upperCase + numbers;
                }
            } else {
                setCriteria = lowerCase + upperCase;
            }
        } else {
            var confirmSelection = confirm(
                "The best passwords use a combination of lower case, capital, numbers, and special characters. Would you like to select your criteria again?"
            );
            if (confirmSelection) {
                writePassword();
            } else {
                confirm("This program is intended to make strong passwords. Please select more password criteria.")
            }
        }
    } else {
        confirm("Reached end of password criteria.")
    }
    console.log(setCriteria);

    // Establish password length
    var passwordLength = prompt("Please enter the desired length of password between 8 and 128 characters:");
    passwordLength = parseInt(passwordLength);
    console.log(passwordLength);

    if (passwordLength > 8 && passwordLength < 128) {
        for (var i = 0; i < passwordLength.length; i++) {
            password = password + setCriteria.charAt(Math.floor(Math.random() * passwordLength.length));
            console.log(password);
        }
    } else {
        alert("Invalid response. Click 'Generate Password' again and enter a number between 8 and 128.");
        return false;
    }

    var passwordText = document.querySelector("#password");
    console.log(passwordText);

    passwordText.value = password;
    console.log(passwordText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);