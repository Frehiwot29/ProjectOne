const prompt = require("prompt-sync")();
let grade = prompt("Enter the grade to find the gpa");
let gpa;
switch (grade) {
    case 'A':
        gpa = 4.0;
        break;
    case 'B':
        gpa = 3.6;
        break;
    case 'C':
        gpa = 3.0;
        break;
    default:
        
        gpa = 0.0;
}
console.log(gpa);