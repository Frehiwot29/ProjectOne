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
console.log("================");
let b = true;
let n = 5;
console.log(typeof b, typeof n) // boolean number
let s1 = String(b);
let s2 = String(n);
console.log(typeof s1, typeof s2) // string string
console.log("================");
console.log("6" / "2");//3 string is coverted to numbers
console.log("================");
console.log(Number(" 123 ")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0
//node
console.log("================");
let prompt = require("prompt-sync")();
let tempInCelsius = prompt("Eneter value in celsius: ");
let tempInFahrenheit = (9 / 5) * parseFloat(tempInCelsius) + 32;
console.log(tempInFahrenheit);

// let prompt = require("prompt-sync")();
// let tempInFahrenheit = prompt("Eneter value in celsius: ");
// let tempInCelsius = (9 / 5) * parseFloat(tempInCelsius) + 32;
// console.log(tempInFahrenheit);

