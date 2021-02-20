function findMin(a, b, c) {
  let arr = new Array(3);
  arr[0] = a;
  arr[1] = b;
  arr[2] = c;
  let new_array = arr.sort((a, b) => a - b);
  return new_array[1];
}
