const prompt = require("prompt-sync")();
let grade = prompt("Enter grade");
let gpa;
if (grade === 'A') {
    gpa = 4.0;
} else if (grade === 'B') {
    gpa = 3.6;
} else if (grade === 'C') {
    gpa = 3.2;
} else {
    gpa = 0.0;
}
console.log("My gpa is: " + gpa);

