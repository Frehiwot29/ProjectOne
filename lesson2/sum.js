let prompt = require("prompt-sync")();
let num1 = prompt("Enter the number");
let num2 = prompt("Enter the number");
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log(num1 + num2);

let user_input = prompt("Please enter a fraction number");
console.log(user_input)
console.log(typeof user_input)
let num = parseFloat(user_input);
console.log(num)
console.log(typeof num)
let int_part_only = parseInt(user_input);
console.log(int_part_only)
console.log(typeof int_part_only)
console.log("===================");
let count1 = 1;
let count2 = 2;
console.log(count1);
console.log(++count1);
console.log(count2)
console.log(count2++);
console.log(count2);

let result = count1-- * 2 + 5;
console.log(result);
console.log(count1);
console.log("===============");
let x = 5;
let square_of_x = Math.pow(x, 2);
console.log(square_of_x);
console.log(Math.PI);
console.log(Math.sqrt(36));
console.log(Math.round(5.4));
console.log(Math.round(5.6));
console.log(Math.floor(5.9));
console.log(Math.ceil(5.2));
console.log(Math.min(1, -1, 4, 3. - 0.2, -9, 9));
console.log(Math.random());
console.log(Math.random());