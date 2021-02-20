//number 2 and 5
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(1234));
console.log(sumOfDigits(32131));
console.log(sumOfDigits(90132));
console.log([25, 3, 123, 45].map((num) => sumOfDigits(num)));
