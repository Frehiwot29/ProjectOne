const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");
let phrase = prompt("Enter the phrase: ");
let i = 0;
while (i < num) {
    console.log(phrase);
    i++;
}
