const prompt = require("prompt-sync")();
let name = prompt("Enter the name of the person: ");
let credite_hours = prompt("Enter the credite hour: ");

let year_in_school = "";
// if (credite_hours < 30) {
//     year_in_school = "freshman";
// }
// if (credite_hours < 60) {
//     year_in_school = "Sophomore";
// }
// if (credite_hours < 90) {
//     year_in_school = "junior";
// }
// if (credite_hours > 90) {
//     year_in_school = "senior";
// }
// console.log(year_in_school);

console.log("++++=========this is the correct one==============if else");
if (credite_hours <= 30) {
    year_in_school = "freshman";
} else if (credite_hours <= 60) {
    year_in_school = "sophomore";

} else if (credite_hours <= 90) {
    year_in_school = "junior";
} else if (credite_hours > 90) {
    year_in_school = "senior";

} else {
    year_in_school = "worng choose";
}
console.log(name + " is " + year_in_school);