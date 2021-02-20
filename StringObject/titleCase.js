/**
 * Write a function named titleCase with one parameter named s. 
 * This function returns a copy of s but with the first letter of each word capitalized.
 * 
*/
function titleCase(str) {
    let result = str.split(" ");
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i][0].toUpperCase() + result[i].substring(1);

    }
    return result.join(" ");
}
console.log(titleCase("adu sim dfg kal"));

// function titleCase(str) {
//     let strName = str.split(" ");
//     for (let i = 0; i < strName.length; i++) {
//         strName[i] = strName[i][0].toUpperCase() + strName[i].substring(1);
//     }
//     return strName.join(" ");
// }
// console.log(titleCase("der ghu nj"));