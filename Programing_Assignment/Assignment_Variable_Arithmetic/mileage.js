const prompt = require("prompt-sync")();
let beginningOdometer = prompt("Enter the beginning odometer: ");
let endingOdometer = prompt("Enter the ending odometer: ")
let mileage_per_galon = endingOdometer - beginningOdometer;
console.log(mileage_per_galon + "mpg");
