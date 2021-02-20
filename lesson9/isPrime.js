/**/ 
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function checkPrime(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    if (!isPrime(arr[i])) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime([1, 2, 3, 4, 5, 6, 7]));
