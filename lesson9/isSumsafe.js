function findsum(arr) {
  if (arr.length === 0) {
    return true;
  }
  let sum = arr.reduce((a, n) => a + n);

  for (let n of arr) {
    if (n === sum) {
      return false;
    }
  }
  return true;
}
let value0 = [];
let value1 = [3, -3, 4, -4];
let value2 = [5, -5, 0];
console.log(findsum(value0));
console.log(findsum(value1));
console.log(findsum(value2));
