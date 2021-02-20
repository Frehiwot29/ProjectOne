function minMax(arr) {
  arr.sort((a, b) => a - b);
  let max_min = [];
  max_min.push(arr[arr.length - 1], arr[0]);
  return max_min;
}
console.log(minMax([2, 3, 4, 5 - 2, -9]));
