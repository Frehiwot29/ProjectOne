let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reduce_given(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let value = reduce_given(arr1);
console.log(value);
