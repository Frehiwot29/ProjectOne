function countVowel(str) {
  let vowol = "eioua";
  let myString = str.toLowerCase();
  count = 0;
  for (let i = 0; i < myString.length; i++) {
    for (let j = 0; j < vowol.length; j++)
      if (myString.charAt(i) === vowol.charAt(j)) {
        count++;
      }
  }
  return count;
}
console.log(countVowel("my name is adonay.k the brothet of simon.ks"));
