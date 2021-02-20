const prompt = require("prompt-sync")();
let candidte = parseFloat(prompt("Enter number: "));
let factor_count = 0;
let output;
let remaider;
for (let i = 0; i <= candidte; i++) {
    remaider = candidte % i;
    if (remaider === 0) {
        factor_count++;

    }
    if (factor_count === 2) {
        output = candidte + "  isprime";

    } else {
        output = candidte + "  is not prime";
    }

}
console.log(output);