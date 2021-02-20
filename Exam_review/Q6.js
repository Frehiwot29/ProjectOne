/**
 * Write a program that asks for users age and prints "Happy Birthday!" 
 * based on the age. For e.g.
   if the user enters 5, program should print "Happy Birthday!" five time.
*/
const prompt = require("prompt-sync")();
let age = prompt("Enter the age: ");
age = parseInt(age);
let i = 0;
while (i < age) {
    console.log("Happy Birthday!");
    i++;

}