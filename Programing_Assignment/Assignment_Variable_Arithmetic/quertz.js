let prompt = require("prompt-sync")();
let qurtz = prompt("Enter value: ");
qurtz = parseFloat(qurtz);
let litter = qurtz * 0.94;
console.log(litter);
console.log("==============kmkmkmkm");
let km = prompt("Enter the km: ");
let mile = km * 0.62;
console.log(mile);
console.log("==============stack");
let number_of_box = prompt("Enter number of box: ");
let num_of_box_each = prompt("Enter number of box in each: ");

let num_of_stack = Math.ceil(number_of_box / num_of_box_each);
console.log(num_of_stack);