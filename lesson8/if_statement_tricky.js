const prompt = require("prompt-sync")();
let x = parseInt(prompt("Enter the a number of x: "));
let y = parseInt(prompt("Enter the value of Y: "));
let message = "wave";
if (x < 2) {
    if (y > 8)
        message = "Hello";
} else {
    message = "GoodBye";
}
console.log(message);
/**
 * 1.if x<2 and y>8 output is "Hello"
 * 2.if x>2 and (no matter the value of y)y>8 output is "GoodBye"
 * 3.if x<2 and y<8 the out put is "wave"
 *
 * */