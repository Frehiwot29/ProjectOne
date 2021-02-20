const arr1 = [1, 5, 7, 9];
function doubleEveryElement(arr) {
    const temp_arr = [];
    for (let i = 0; i < arr.length; i++) {
        temp_arr[i] = arr[i] * 2;
    }
    return temp_arr;
}
const doubled_arr = doubleEveryElement(arr1);
console.log(doubled_arr);
console.log("========================");
const arr2 = [1, 5, 7, 9];
//const oubled_arr1=arr2.map(function(n){return n*2})
//or function mapper(n){return n*2}
// const doubled_arr1 = arr2.map(mapper);
const doubled_arr1 = arr2.map(n => n * 2);
console.log(doubled_arr1);