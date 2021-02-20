const prompt = require("prompt-sync")();
let sales = parseFloat(prompt("Enter sales value"));
//sales = parseFloat(sales);
let rate;
if (sales < 300) {
    rate = 0;

} else if (sales < 600) {
    rate = 0.25;
} else if (sales < 1000) {
    rate = 0.025;
} else {
    rate = 0.03;
}
let commision = sales * rate;
console.log(commision);
