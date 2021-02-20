const prompt = require("prompt-sync")();
let weather = prompt("Enter the weather: ");
let footwear = "";
switch (weather) {
    case "hot":
        footwear = "sandels";
        break;
    case "rain":
        footwear = "galoshes";
        break;
    case "snow":
        footwear = "boots";
        break;
    default:
        footwear = "shoes";
}
console.log(footwear);

console.log("===================== if else");
if (weather === "hot") {
    footwear = "sandels";
} else if (weather === "rain") {
    footwear = "galoshes";
} else if (weather === "snow") {
    footwear = "boots";
} else {
    footwear = "shoes";
}
console.log(footwear);