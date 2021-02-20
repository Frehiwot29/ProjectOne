const prompt = require("prompt-sync")();
let balance = parseFloat(prompt("Enter the balance: "));
let annualRate = parseFloat(prompt("Enter the annual rate: "));
let number_of_month = parseInt(prompt("Enter the number of month: "));
let monthRate = annualRate / 12;
let interset;
for (let i = 1; i <= number_of_month; i++) {
    interset = balance * monthRate;
    interset = Math.round(interset * 100) / 100;
    balance += interset;

}
console.log(number_of_month + " " + balance);