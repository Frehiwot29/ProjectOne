/*from the given array filter an odd number */
let arr2 = [1, 4, 2, 3, 7, 8, 8, 9, 12, 3];
function filter_arr(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
let value = filter_arr(arr2);
console.log(value);
