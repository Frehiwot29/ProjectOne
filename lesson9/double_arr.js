/*find the program of the give array doubling(double every element of the given array) so the function is say 
duobleAllElemnt(); 
*/
const arr1 = [1, 2, 3, 4];
function duobleAllElement(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 2;
  }
  return result;
}
const value = duobleAllElement(arr1);
console.log(value);
// arrow methd
const arr2 = [1, 5, 7, 9];
const doubled_arr = arr2.map((n) => n * 2);
console.log(doubled_arr);
