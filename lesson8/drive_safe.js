const prompt = require("prompt-sync")();
let age = prompt("Enter the your age");
age = parseInt(age);
if (age <= 0) {
    console.log("please Enter valued age");
} else if (age <= 14) {
    console.log("you can not drive");
} else if (age <= 18) {
    console.log("drive under supervision");

} else {
    console.log("you can drive");
}