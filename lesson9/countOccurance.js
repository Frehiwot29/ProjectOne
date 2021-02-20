function countOccurences(s, c) {
  let count = 0;
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      count++;
    }
  }
  return count;
}
let str = "ADDViklljbggfGG";
console.log(countOccurences(str, "g"));
//.....count Uppers
// function countUppers(s) {
//   let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let c = s[i];
//     if (uppers.indexOf(c) !== -1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countUppers(uppers, "A"));
