/**
 * 1.Write a program that keeps on asking for user input and prints it, until
  user types the word "stop" (without quotes). "Stop" word can be in
  any case (small, capital or mixed)
 * 2.Write a program that takes comma separated text from user and
  converts it into an array of words and prints in reverse order.
• 3.Write a program to replace all the occurrence of "for" in an input
    string with 4.

*/
const prompt = require("prompt-sync")();
let input;
let lowerCaseInput;
input = prompt("Enter the string stop: ");
lowerCaseInput = input.toUpperCase();
// do {
//     input = prompt("Enter the string stop: ");
//     lowerCaseInput = input.toUpperCase();
//     console.log(input);
// } while (lowerCaseInput !== "stop");

while (lowerCaseInput !== 'stop') {
    input = prompt("Enter the string stop: ");
    lowerCaseInput = input.toUpperCase();

}
console.log(input);
console.log("=============================================");
let input1 = prompt("Enter please the separated text: ");
let words1 = input1.split(',');
words1.reverse();
reverseString = words1.join('_');
console.log(reverseString);
// how to replace string by number
let input2 = prompt("please Enter your text: ");
let updatedinput = input2.replace('for', '4');
console.log(updatedinput);
//identifying typeof data type
let myMixedBag = [1, "hello", true];
for (let x of myMixedBag) {
    console.log(typeof x);
}
