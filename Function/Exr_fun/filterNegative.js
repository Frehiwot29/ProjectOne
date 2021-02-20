/**
 * write a program to filter out all negative numbers from given array of number
*/
const arr = [1, 2, -3, -4, 5, 6, -7];
// let allNeg = arr.filter(filterAllNeg)
// console.log(allNeg);
// function filterAllNeg(n) {
//     if (n < 0) {
//         return true;

//     } else {
//         return false;
//     }

// }
let myallNeg = arr.filter(n => n < 0);
console.log(myallNeg);