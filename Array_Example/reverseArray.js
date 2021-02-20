/**
 * write a function named arrayReversed that returns array with its value in 
 * reversed order.
*/
function reverseArray(arr) {
    let temprArr = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temprArr[j] = arr[i];
        j++;
    }
    return temprArr;
}
let result = [1, 2, 3, 4, 5];
console.log(reverseArray(result));