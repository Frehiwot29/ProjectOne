function isOne2One(arr) {
  if (!(arr[0] === 1 && arr[arr.length - 1] === 1)) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] === 2)) {
      return false;
    }
  }
  return true;
}
let testArr1 = [1, 2, 2, 2, 1];
let testArr2 = [1, 2, 2, 2, 2];
let testArr3 = [1, 2, 3, 2, 1];
let testArr4 = [1, 0, 4, 1];
console.log(isOne2One(testArr1));
console.log(isOne2One(testArr2));
console.log(isOne2One(testArr3));
console.log(isOne2One(testArr4));
