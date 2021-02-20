/**
 * write a function sumArray ,that takes two arrays as parameter (you can assum the same length )
 * then returns a new array by adding two array values at the corresponding indices 
 * 
*/
function sumArray(arr1, arr2) {
    let sumArr = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArr[i] = arr1[i] + arr2[i];

    }
    return sumArr;

}
let myarr1 = [1, 3, 4, 5, 6];
let myarr2 = [1, 3, 4, 5, 6];
console.log(sumArray(myarr1, myarr2));