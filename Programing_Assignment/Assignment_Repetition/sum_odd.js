/**
 * Write a defining table and a program that asks the user for an integer n and then outputs the 
 * sum of all the odd integers between 1 and n, inclusive.
 *  For example, if a user entered 10, 
 * your program would add 1 + 3 + 5 + 7 + 9 and output 25. If a user entered 11,
 *  your program would add 1 + 3 + 5 + 7 + 9 + 11 and output 36.
 * 
*/

const prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");
let sum = 0;
let i = 1;
while (i <= num) {
    if (i % 2 != 0) {
        sum += i;
    }
    i++;
}
console.log(sum);

