/**
 * Write a function named prefix that returns the common prefix of two strings. 
 * For example, the common prefix of “disable” and “distasteful” is “dis”. 
 * This function takes two parameters and returns the common prefix.
*/
"use strict";
function getPrefix(str1, str2) {
    let output = "";
    let count = 0;
    while (true) {

        if (str1[0 + count] === str2[0 + count]) {
            output += str1[0 + count];
            count++;
        } else {
            break;
        }
    }
    return output;

}
console.log(getPrefix("freee", "frssss"));