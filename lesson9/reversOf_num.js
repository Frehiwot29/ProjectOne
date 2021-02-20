let num = [1, 2, 3, 4, 5];
function reverse(arr) {
  let rev = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i];
  }
  return rev;
}
let value = reverse(num);
console.log(value);
// let str1 = "are";
// let arr2 = "ARE";
// console.log(str1.charCodeAt(0));

// console.log(arr2.charCodeAt(0));
