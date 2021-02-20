/**
 * write a function sumOddIndicesValues that takes an array as parameter and returns
 *  the sum of the value on the odd indices
 * 
*/
function sumOddIndicesValues(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }

    }
    return sum;

}
let num = [1, 3, 4, 6, 4, 7, 2];
console.log(sumOddIndicesValues(num));