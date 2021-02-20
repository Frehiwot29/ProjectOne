let x = 5;
let y = "7";
let test = true;

let result = x + y;
console.log(result);
console.log(typeof result);

result = x + test;
console.log(result);
console.log(typeof result);

result = test + y;
console.log(result);
console.log(typeof result);

result = y * 2;
console.log(result);
console.log(typeof result);
let num = 5;

let string_num = 5 + "";
console.log(string_num);
console.log(typeof string_num);
//node
let prompt = require("prompt-sync")();
let tempInCelsius = prompt("Eneter value in celsius: ");
let tempInFahrenheit = (9 / 5) * parseFloat(tempInCelsius) + 32;
console.log(tempInFahrenheit);

// let prompt = require("prompt-sync")();
// let tempInFahrenheit = prompt("Eneter value in celsius: ");
// let tempInCelsius = (9 / 5) * parseFloat(tempInCelsius) + 32;
// console.log(tempInFahrenheit);
