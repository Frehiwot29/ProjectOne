/**
 * Write a loop to count forwards by twos 
 * from the value in the variable first to the value in the variable last. 
 * Assume the variables first and last already exist and hold values.
*/
const prompt = require("prompt-sync")();
let first = prompt("Enter the first number: ");
let last = prompt("Enter the last number: ");
for (; first < last; first += 2) {
    console.log(first);
}
//infinte loop
// while (first > last) {
//     // console.log(first);
//     if (first === last) {
//         break;
//     }
//     console.log(first);
//     first += 2;
// }
