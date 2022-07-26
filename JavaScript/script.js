
// User input variables: 
var enter;
var charNumber;
var charSpecial;
var charUpper;
var charLower;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// charLowerbetical characters
lowerchars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
Upper = lowerchars.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = pg;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input for the length of the password
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    //If user doesn't input a number
    if (!enter) {
        alert("This needs a value");
        } else if (enter < 8 || enter > 128) {
    // Start of prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        charNumber = confirm("Do you wanna use numbers?");
        charSpecial = confirm("Do you wanna use special Characters?");
        charUpper = confirm("Do you wanna use Upper Case letters?");
        charLower = confirm("do you wanna use Lower Case letters?");
    };
    // Prompts a user if nothing was selected
    if (!charSpecial && !charNumber && !charUpper && !charLower) {
        choices = alert("You must choose a criteria!");

    }
    // Confirmation of all 4 promts
    else if (charSpecial && charNumber && charUpper && charLower) {

        choices = character.concat(number, lowerchars, Upper);
    }
    // If only 3 promts where selected
    else if (charSpecial && charNumber && charUpper) {
        choices = character.concat(number, Upper);
    }
    else if (charSpecial && charNumber && charLower) {
        choices = character.concat(number, lowerchars);
    }
    else if (charSpecial && charLower && charUpper) {
        choices = character.concat(lowerchars, Upper);
    }
    else if (charNumber && charLower && charUpper) {
        choices = number.concat(lowerchars, Upper);
    }
    // If only 2 prompts where selected 
    else if (charSpecial && charNumber) {
        choices = character.concat(number);

    } else if (charSpecial && charLower) {
        choices = character.concat(lowerchars);

    } else if (charSpecial && charUpper) {
        choices = character.concat(Upper);
    }
    else if (charLower && charNumber) {
        choices = lowerchars.concat(number);

    } else if (charLower && charUpper) {
        choices = lowerchars.concat(Upper);

    } else if (charNumber && charUpper) {
        choices = number.concat(Upper);
    }
    // If only 1 prompt was selected
    else if (charSpecial) {
        choices = character;
    }
    else if (charNumber) {
        choices = number;
    }
    else if (charLower) {
        choices = lowerchars;
    }
    // Created space variable to fill uppercase conversion
    else if (charUpper) {
        choices = space.concat(Upper);
    };
    var password = [];

    // Start of random selection variables:
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var pg = password.join("");
    UserInput(pg);
    return pg;
}
// This puts the password value into the textbox
function UserInput(pg) {
    document.getElementById("password").textContent = pg;

}