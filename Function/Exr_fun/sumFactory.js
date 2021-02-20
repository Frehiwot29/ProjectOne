function sumFactory(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === sum) {
            count++;
        }

    }
    return count;

}
let numArr = [1, -1, 1, -1, 1, -1, 1, -1, 1];
console.log(sumFactory(numArr));