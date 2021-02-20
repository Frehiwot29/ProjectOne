/**
 * Write a function named suffix that returns the common suffix of two strings. 
 * For example, the common suffix of “swimming” and “walking” is “ing”. 
 * This function takes two parameters and returns the common suffix.
*/
"use strict";
function getSuffix(str1, str2) {
    let output = "";
    let count = 0;
    while (true) {
        if (str1[str1.length - 1 - count] === str2[str2.length - 1 - count]) {
            output += str1[str1.length - 1 - count];
            count++;
        } else {
            break;
        }
    }
    return output;

}
console.log(getSuffix("adonayk", "simonk"));