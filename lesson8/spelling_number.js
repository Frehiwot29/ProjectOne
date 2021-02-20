const prompt = require("prompt-sync")();
let num = prompt("please enter the number from 1-5: ");
num = parseInt(num);
let spelling = "";
if (num === 1) {
    spelling = "one";
} else if (num === 2) {
    spelling = "Two";
} else if (num === 3) {
    spelling = "Three";
} else if (num === 4) {
    spelling = "Four";
} else if (num === 5) {
    spelling = "Five";
} else {
    spelling = "I do not know what you type";
}
console.log(spelling);
//================================
switch (num) {
    case 1:
        spelling = "one";
        break;
    case 2:
        spelling = "Two";
        break;
    case 3:
        spelling = "Three";
        break;
    case 4:
        spelling = "Four";
        break;
    case 5:
        spelling = "Five";
        break;
    default:
        spelling = "I do not know what you type====================";
}
console.log(spelling);