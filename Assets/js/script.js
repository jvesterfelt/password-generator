// List global variables
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

    //Prompt user for data types to establish password criteria
    var confirmLowerCase = confirm("Would you like to use lowercase letters?");
    var confirmUpperCase = confirm("Would you like to use capital letters?");
    var confirmNumbers = confirm("Would you like to use numbers?");
    var confirmSpecialChar = confirm("Would you like to use special characters?");
    var confirmArray = [confirmLowerCase, confirmUpperCase, confirmNumbers, confirmSpecialChar];
    var criteriaArray = [lowerCase, upperCase, numbers, specialChar];

    // Loop through user responses, set password criteria according to user selections, validate user responses
    for (var i = 0; i < confirmArray.length; i++) {
        if (confirmArray[i]) {
            setCriteria = setCriteria + criteriaArray[i];
        }
    }
    // Validate that user selected at least one data type for criteria
    if (!setCriteria) {
        alert("Please select more criteria to create a stronger password.");
        return;
    }

    // Establish password length
    passwordLength = prompt("Please enter the desired length of password between 8 and 128 characters:");
    passwordLength = parseInt(passwordLength);

    // Validate the desired length of password, between 8 and 128 characters
    if (passwordLength > 7 && passwordLength < 129) {
        for (var i = 0; i < passwordLength; i++) {
            var tempPassword = setCriteria[(Math.floor(Math.random() * setCriteria.length))];
            password = password + tempPassword;
        }
    } else {
        alert("Invalid response. Click 'Generate Password' again and enter a number between 8 and 128.");
        return;
    }

    var passwordText = document.querySelector("#password");
    // console.log(passwordText);

    passwordText.value = password;
    // console.log(passwordText.value);

    reset();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);