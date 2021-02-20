/**
 * Write a JavaScript program that asks radius of
 * a circle as input form the user and prints the area
   of the circle using formula (πr2).
   Program should keep on prompting user to enter correct value,
   until the value enter is a positive number.
   Use Math object for getting the value of π and getting
   the square of the radius.
*/
const prompt = require("prompt-sync")();
let r = parseInt(prompt("Enter the redius: "));
let area = Math.PI * r * r;
console.log(area);
console.log("===============");
const prompt = require("prompt-sync")();
let r = parseFloat(prompt("Enter value of the redius: "));
while (r <= 0) {
    let r = prompt("Enter value of the redius: ");
    r = parseFloat(r);

}
let area = Math.PI * r * r;
console.log(area);
console.log("===============");

let r;
do {
    r = prompt("Enter value of the redius: ");
    r = parseFloat(r);

} while (r <= 0) {

}
let area = Math.PI * Math.pow(r, 2);
console.log(area);
