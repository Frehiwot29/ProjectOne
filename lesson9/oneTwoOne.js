function oneTwoOne(arr) {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    if (arr[i] === arr[len]) {
      return true;
    } else {
      return false;
    }
  }
}
let value1 = [1, 2, 2, 2, 1, 1];
let value2 = [1, 2, 3, 3, 2, 2];
let value3 = [1, 3, 4, 1];
console.log(oneTwoOne(value1));
console.log(oneTwoOne(value2));
console.log(oneTwoOne(value3));
