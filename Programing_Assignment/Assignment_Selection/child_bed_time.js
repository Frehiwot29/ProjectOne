const prompt = require("prompt-sync")();
let child_age = prompt("Enter the age of the child: ");
child_age = parseInt(child_age);
let season = prompt("Enter the season:  ");
let bed_time;
if (child_age <= 5) {


    if (season === "summer" || season === "fall")
        bed_time = 8.30;
    if (season === "winter" || season == "spring")
        bed_time = 8;

} else if (child_age > 6 && child_age < 12) {
    if (season === "summer")
        bed_time = 9.30;
    if (season === "spring" || season === "fall")
        bed_time = 8.30;


} else if (child_age >= 13) {
    if (season === "summer")
        bed_time = 10.30;
    if (season === "winter" || season === "spring" || season == "fall")
        bed_time = 9.30;
} else {
    bed_time = "is not specifaied";
}
console.log(bed_time);