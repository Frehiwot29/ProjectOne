/**
 * write a program to filter out all negative number from agiven array of numbers
*/
const arr = [1, 2, -1, 3, -2, 5, 6];
function filter_negative(arr) {
    let temp_arr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        //let n = arr[i];
        if (arr[i] >= 0) {
            temp_arr[j] = arr[i];
            j++;
        }

    }
    return temp_arr;
}
console.log(arr);
console.log(filter_negative(arr));
console.log("===============");
const arr1 = [1, 2, -1, 3, -2, 5, 6];
const position = arr.filter(n => n >= 0);
console.log(position);

