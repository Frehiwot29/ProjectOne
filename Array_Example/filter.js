const arr = [1, 4, 2, 3, 7, 8, 8, 9, 12, 3];
function filterOdd(arr1) {
    let temp_arr = [];
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 === 0) {
            temp_arr[j] = arr1[i];
            j++;
        }

    }
    return temp_arr;
}
console.log(arr);
console.log(filterOdd(arr));