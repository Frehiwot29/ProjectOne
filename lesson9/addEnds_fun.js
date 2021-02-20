/*add the ends of un known array */
let arr1 = [1, 2, 3, 4];
function addEnds(arr) {
  let sum = [];
  let arr2 = arr[arr.length - 1];
  let arr3 = arr[0];
  sum = arr2 + arr3;
  return sum;
}
console.log(addEnds(arr1));
