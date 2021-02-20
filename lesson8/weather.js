const prompt = require("prompt-sync")();
let weather = prompt("Enter the weather you like outside: ");
let temp = prompt("Enter the temprature")
if (weather === "rainly") {
    if (temp < 80) {
        console.log("Move freelly with out an unbrella")
    } else {
        console.log("Better used trade mill at home.")
    }

}

let input = prompt("please inter the number between 1-10");
input = parseInt(input);
if (input === 7) {
    console.log("Bingo! ");
} else {
    console.log("Try again");
}