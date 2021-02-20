const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");

let i = 1;
while (i <= num) {
    console.log(i);
    i++;
}
