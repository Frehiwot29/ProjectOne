const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter the age: "));
let gameAttended = parseInt(prompt("Enter the gameAttended: "));
let price;
if (age < 18) {
    if (gameAttended < 5)
        price = 8;
    else if (gameAttended < 10)
        price = 6;
    else
        price = 5;
} else if (age < 54) {
    if (gameAttended < 10)
        price = 10;
    else
        price = 8;
} else {
    if (gameAttended < 10)
        price = 8;
    else
        price = 6;
}
console.log(price);