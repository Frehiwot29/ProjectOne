/**
 * write a function testPrime that it takes n as parameter returns true if it is prime false if it is not:
 *   a. now write a program to get a number from the user and use the function 
 *      you wrote above to check is the number is prime print "the number you entered is prime " if it is not
 *      print " the number you entered is composite"
 *   b. how would you solve if user wants to test numbers at once ? i.e insted of entering one number 
 *      at a time .they wanted to enter all ten numbers at once 
 * 
*/
function testPrime(n) {
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            return false;

        }
        return true;

    }

}
console.log(testPrime(7));
const prompt = require("prompt-sync")();
let test_prime = parseInt(prompt("please enter a number:  "));
let isprime = testPrime(test_prime);
if (isprime === true) {
    console.log("The number you entered is prime");
} else {
    console.log("The number you entered is composite ");
}

