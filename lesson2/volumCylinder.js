const prompt = require("prompt-sync")();
let redius = +prompt("Enter the value of redius: ");
let heigth = +prompt("Enter the value of heigth: ");
let volumcylinder = Math.PI * Math.pow(redius, 2) * heigth;
console.log(`computed volum:  ${volumcylinder}`);
