/*from the given array filter a number which is negative */
let arr2 = [1, -2, 1, 3, -5, 6, 7, -8];
function filter_negativ(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
let value = filter_negativ(arr2);
console.log(value);
