let i = 1;
do {
    console.log(i);
    i++;
} while (i < 3);
console.log("Done");
const prompt = require("prompt-sync")();
let alies, responce;
do {
    alies = prompt("What is your name: ");
    responce = prompt("Are you sur: " + alies + " " + " Your name: ");
} while (responce != "yes");
console.log("Hello" + " " + alies);