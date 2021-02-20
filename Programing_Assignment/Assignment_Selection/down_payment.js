const prompt = require("prompt-sync")();
let cost = prompt("Enter the cost: ");
cost = parseFloat(cost);
let down_payment;
if (cost < 50000) {
    down_payment = cost * 0.005;

} else if (cost < 100000) {
    down_payment = 2000 + 0.01 * (cost - 50000);

} else if (cost < 200000) {
    down_payment = 7500 + 0.2*(cost - 100000);

} else if (cost > 200000) {
    down_payment = 27500 + 0.25*(cost - 200000);
} else {
    down_payment = 988888;
}
console.log(down_payment);
