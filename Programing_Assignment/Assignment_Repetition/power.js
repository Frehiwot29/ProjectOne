/**
 * Write a defining table and a program to output all powers of 2 from 20 up to 231, inclusive.
 *  In other words, your program should output this series: 1, 2, 4, 8, … 2147483648
 * 
*/

const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");
let i = 0;
let product;
while (i <= num) {
    product = Math.pow(2, i);
    console.log(product);
    i++;
}
