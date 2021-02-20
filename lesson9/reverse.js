function rotationLeft(arr) {
  let first_element = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first_element;
}
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(rotationLeft(arr));
console.log(arr);

// function rotationLeft(arr) {
//   let temp_arr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     temp_arr[i] = arr[i + 1];
//   }
//   temp_arr[arr.length - 1] = arr[0];
//   return temp_arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(rotationLeft(arr));
// console.log(arr);
