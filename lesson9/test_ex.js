// function isSumSafe(arr) {
//   if (arr.length === 0) {
//     return false;
//   }
//   let sum = arr.reduce((a, b) => a + b);
//   for (let i = 0; i < arr.length; i++) {
//     if (sum === arr[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// let arr2 = [5, -5, 0, 4, 5];
// let num = [];
// console.log(isSumSafe(arr2));
// console.log(isSumSafe(num));
// //......
// let arr = [3, 5, -4, 3, -8];
// let abs_array = arr.map((n) => Math.abs(n));
// console.log(abs_array);
// //.....
// function findsmallest(n1, n2, n3) {
//   if (n1 <= n2 && n1 <= n3) {
//     return n1;
//   } else if (n2 < n1 && n2 <= n3) {
//     return n2;
//   } else {
//     return n3;
//   }
// }
// console.log(findsmallest(2, 3, 4));
// //'''''''
// function one2One(arr) {
//   let l = arr.length - 1;
//   for (let i = 1; i < l; i++) {
//     if (arr[i] !== 2) {
//       return false;
//     }
//   }
//   if (arr[0] === 1 && arr[l] === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let value = [1, 2, 2, 2, 2, 1];
// let value3 = [1, 2, 7, 2, 2, 1];
// let value5 = [1, 2, 2, 2, 4, 1];
// console.log(one2One(value));
// console.log(one2One(value3));
// console.log(one2One(value5));
// ///....
// max_min;
// let num = [1, 2, 3, 4, -6, -9, 8, 56];
// function maxMinPair(arr) {
//   let max_min = [];
//   let arr1 = num.sort((a, b) => a - b);
//   max_min.push(arr1[arr.length - 1], arr1[0]);
//   return max_min;
// }
// console.log(maxMinPair(num));
// /// count vowels
// function countVowel(str) {
//   let vowel = "iuoea";
//   let num = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowel.indexOf(num[i]) !== -1) {
//       count++;
//     }
//   }
//   return count;
// }
// let hu = "";
// let va = "hi there, how are you";
// let value = "ThE man, who wAs, going to sHire is perfect man!";
// console.log(countVowel(value));
// console.log(countVowel(hu));
// function countVowels(str) {
//   let vowel = "aeiou";
//   let str2 = str.toLowerCase();
//   let count = 0;

//   for (let i = 0; i < str2.length; i++) {
//     if (vowel.indexOf(str2[i]) !== -1) {
//       count++;
//     }
//   }
//   return count;
// }
// let vowel = "thisa is me a";
// console.log(countVowels(vowel));
// let pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

// let petCounts = pets.reduce(function (obj, pet) {
//   if (!obj[pet]) {
//     obj[pet] = 1;
//   } else {
//     obj[pet]++;
//   }
//   return obj;
// }, {});

// console.log(petCounts);

// /*
//     Output:
//      {
//         dog: 2,
//         chicken: 3,
//         cat: 1,
//         rabbit: 1
//      }
//      */
// function sumOfArray(arr1, arr2) {
//   let arr3 = [];
//   let length = Math.max(arr1.length, arr2.length);
//   for (let i = 0; i < length; i++) {
//     arr3[i] = (arr1[i] || 0) + (arr2[i] || 0);
//   }
//   return arr3;
// }
// let arr1 = [2, 3, 4, 6];
// let arr2 = [2, 3, 4, 5];
// console.log(sumOfArray(arr1, arr2));
// //,,,,,,
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
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
console.log(checkPrime([2, 7, 6, 9]));
//,,,,,,
// function secondeLargest(arr) {
//   let nonRepeated = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (nonRepeated.indexOf(arr[i]) === -1) {
//       nonRepeated.push(arr[i]);
//     }
//   }
//   nonRepeated.sort((a, b) => b - a);
//   return nonRepeated[1];
// }
// let num = [1, 2, 3, 3, 4, 5, 4, 5];
// console.log(secondeLargest(num));
// /////.....
// function replace(input) {
//   let arr = input.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "for") {
//       arr[i] = "4";
//     }
//   }
//   let replaced = arr.join(" ");
//   return replaced;
// }
// console.log(replace("Thanks for joining for us."));
/////....
