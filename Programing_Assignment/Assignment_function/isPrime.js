/**
 * Write a function named checkPrime that accepts a parameter
   and returns true if the argument is a prime number otherwise
    returns false.
•    Now write a program that prompts user to input a number and calls the
    function checkPrime to see if the entered number is a prime number or not
 * 
*/
const prompt = require("prompt-sync")();
let n = prompt("Enter the value: ");
n = parseInt(n);
function checkprime(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) {
            continue;
        }
        console.log(i);
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        return true;

    }

}
checkprime();