"use strict";

function sum(n1, n2) {
    return n1 + n2;
}
function product(n1, n2) {
    return n1 * n2;

}
function subtraction(n1, n2) {
    return n1 - n2;
}
function division(n1, n2) {
    return n1 / n2;

}
const prompt = require("prompt-sync")();
const operation = prompt("please Enter the selected opraned + - *:   ");
const n1 = parseFloat(prompt("Enter the number1: "));

const n2 = parseFloat(prompt("Enter the number2: "));

if (operation === '+') {
    console.log(sum(n1, n2));
} else if (operation === '-') {
    console.log(subtraction(n1, n2));
} else if (operation === '*') {
    console.log(product(n1, n2));
} else if (operation === '/') {
    console.log(division(n1, n2));
}
