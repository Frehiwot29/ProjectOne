
/** 
 * write a function named isDivisible that takes an integer array and a divisor and returns 1,if all its elements
 * are divided by the divisor with no remainder . other itreturns 0.
*/

function isDivisble(arr, n) {
    for (let i = 0; arr.length; i++) {
        if (arr[i] % n !== 0) {
            return 0;
        } else {
            return 1;
        }

    }
}
let numArr = [2, 4, 6, 8, 10];
let num = 3;

console.log(isDivisble(numArr, num));