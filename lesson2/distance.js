const prompt = require("prompt-sync")();
let x1 = +prompt("inter the value of x1: ");
let x2 = +prompt("inter the value of x2: ");
let y1 = +prompt("inter the value of y1: ");
let y2 = +prompt("inter the value of y1: ");
let diff_X_pro = (x2 - x1) * (x2 - x1);
let diff_y_pro = (y2 - y1) * (y2 - y1);
let distanceOf_Two_distance = Math.sqrt(diff_X_pro + diff_y_pro);
console.log(distanceOf_Two_distance);