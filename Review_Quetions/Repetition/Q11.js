const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the number: "));
let c = "";
let b = 100;
while (b >= 0) {
    c += b;
    b -= a;
}
console.log(c);