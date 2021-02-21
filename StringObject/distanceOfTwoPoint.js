const prompt = require("prompt-sync")();
let x1 = parseInt(prompt("inter the value of x1: "));
let x2 = parseInt(prompt("inter the value of x2: "));
let y1 = parseInt(prompt("inter the value of y1: "));
let y2 = parseInt(prompt("inter the value of y1: "));
let diff_X = (x2 - x1) * (x2 - x1);
let diff_y = (y2 - y1) * (y2 - y1);
let distance = Math.sqrt(diff_X + diff_y);
console.log(distance);