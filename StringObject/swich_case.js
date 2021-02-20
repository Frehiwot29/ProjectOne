/**
 * Write a function named switchCase that receives a parameter named str. 
 * This function must return a new string that contains 
 * the same characters as str but with the case of every character switched. 
 * For example, if switchCase were called like this: switchCase(" Catch 22"); 
 * it would return "cATCH 22" (without the quotes).
 * 
*/
function switchCase(str) {
    let ss = str.toLowerCase();
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ss[i]) {
            result += str[i].toUpperCase();
        } else {
            result += ss[i];
        }

    }
    return result;
}
console.log(switchCase("Frehiwot 22"));