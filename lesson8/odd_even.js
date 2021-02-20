const prompt = require("prompt-sync")();
let input = prompt("Enter the number");
let number = parseInt(input);
if ((number % 2) === 0) {
    console.log("Even number: ");

} else {
    console.log("odd number: ")
}