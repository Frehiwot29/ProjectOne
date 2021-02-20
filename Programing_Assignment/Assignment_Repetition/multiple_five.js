/**
 * Write a defining table and a program to output the five times
 *  table from 1 to 12 in this format:
 *  5 x 1 = 5 
 * 5 x 2 = 10 … 
 * 5 x 12 = 60
 * 
*/

const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");
let i = 1;
let product;
while (i <= num) {
    product = 5 * i;
    console.log(product);
    i++;
}

