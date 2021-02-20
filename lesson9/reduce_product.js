/*• Reduce array [1,2,3,4,5] into product of all the elements in the array.
• Solve it using loop */
let arr1 = [1, 2, 3, 4, 5];
function reduce_product(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
let value = reduce_product(arr1);
console.log(value);
