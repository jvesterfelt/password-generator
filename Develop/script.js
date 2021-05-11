// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEGGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$^&*~?";
var setCriteria = "";
var password = "";
var passwordLength = "";


// Function to reset values
function reset() {
    setCriteria = "";
    password = "";
    passwordLength = "";
}

// Write password to the #password input
function writePassword() {

    //Establish password criteria
    var confirmLowerCase = confirm("Would you like to use lowercase letters?");
    var confirmUpperCase = confirm("Would you like to use capital letters?");
    var confirmNumbers = confirm("Would you like to use numbers?");
    var confirmSpecialChar = confirm("Would you like to use special characters?");
    // while (confirmLowerCase || confirmUpperCase || confirmNumbers || confirmSpecialChar) {
    //     if (confirmLowerCase) {
    //         setCriteria = setCriteria + lowerCase;
    //     } else {
    //         setCriteria = setCriteria;
    //     }
    //     if (confirmUpperCase) {
    //         setCriteria = setCriteria + upperCase;
    //     } else {
    //         setCriteria = setCriteria;
    //     }
    //     if (confirmNumbers) {
    //         setCriteria = setCriteria + numbers;
    //     } else {
    //         setCriteria = setCriteria;
    //     }
    //     if (confirmSpecialChar) {
    //         setCriteria = setCriteria + specialChar;
    //     } else {
    //         setCriteria = setCriteria;
    //     }
    //     if (setCriteria.length > 26) {
    //         return setCriteria;
    //     } else {
    //         alert("Please select more criteria to create a stronger password.");
    //         return false;
    //     }
    // }

    if (confirmLowerCase) {
        if (confirmUpperCase) {
            if (confirmNumbers) {
                if (confirmSpecialChar) {
                    var setCriteria_full = lowerCase + upperCase + numbers + specialChar;
                    setCriteria = setCriteria_full;
                } else {
                    var setCriteria_alphaNum = lowerCase + upperCase + numbers;
                    setCriteria = setCriteria_alphaNum;
                }
            } else {
                var setCriteria_alpha = lowerCase + upperCase;
                setCriteria = setCriteria_alpha;
            }
        } else {
            var setCriteria_lower = lowerCase;
            setCriteria = setCriteria_lower;
            console.log(setCriteria.length);
            if (setCriteria.length <= 26) {
                alert("Please select more criteria to create a stronger password.");
                return false;
            } else {
                return true;
            }
        }
    } else {
        confirm("Please select more criteria to create a stronger password.");
        return false;
    }

    // Establish password length
    passwordLength = prompt("Please enter the desired length of password between 8 and 128 characters:");
    passwordLength = parseInt(passwordLength);

    if (passwordLength > 8 && passwordLength < 128) {
        for (var i = 0; i < passwordLength; i++) {
            var tempPassword = setCriteria[(Math.floor(Math.random() * setCriteria.length))];
            password = password + tempPassword;
        }
    } else {
        alert("Invalid response. Click 'Generate Password' again and enter a number between 8 and 128.");
        return false;
    }

    var passwordText = document.querySelector("#password");
    // console.log(passwordText);

    passwordText.value = password;
    // console.log(passwordText.value);

    reset();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);