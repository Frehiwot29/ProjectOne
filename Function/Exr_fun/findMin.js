/**
 * write a function findmin that takes an array as parameter returns the min value 
 * Now using the function array=[2,3,-1,-4,3,2,1];
*/
function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];

        }

    }
    return min;
}
let myarr = [2, 3, -1, -4, 3, 2, 1];
console.log(findMin(myarr));