const prompt = require("prompt-sync")();
let ainput = prompt("Enter the value of a:");
let binput = prompt("Enter the value of b:");
let cinput = prompt("Enter the value of c:");
let a = parseFloat(ainput);
let b = parseFloat(binput);
let c = parseFloat(cinput);
let m = b * b - 4 * a * c;
let root1, root2;
if (m >= 0) {
    let sq = Math.sqrt(m);
    root1 = -b + sq / 2 * a;
    root2 = -b - sq / 2 * a;
}
console.log(root1);
console.log(root2);
