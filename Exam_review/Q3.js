/**
 * Write a JavaScript program that asks user to input gross 
 * salary and shows the federal tax he/she
   need to pay for the year. Federal tax brackets are as follows
   a. Salary up to 20K, don't have to pay any federal tax
   b. Salary above 20K and up to 50K, 5% of the salary
   c. Salary above 50K needs to pay 10% of the salary
*/
const prompt = require("prompt-sync")();
let salary = prompt("Enter the salary: ");
let federaltax;
if (salary === 20000) {
    federaltax = "do not have to pay any federaltax";
} else if (salary < 50000) {
    federaltax = salary * 0.05;
} else if (salary > 50000) {
    federaltax = salary * 0.1;
}
console.log(federaltax);