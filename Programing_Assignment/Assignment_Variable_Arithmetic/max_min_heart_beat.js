const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter the an age: "));
const HEART_RATE = 220 - age;
let slowest=HEART_RATE*.65;
let fastest=HEART_RATE*.85;
console.log(slowest);
console.log(fastest);




