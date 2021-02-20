const prompt = require("prompt-sync")();
let sum = 0;
let n = parseFloat(prompt("Enter a number: "));
for (let i = 0; i < n; i++) {

    if (n === 0) {
        break;
    }
    sum += n;

}
console.log(sum);