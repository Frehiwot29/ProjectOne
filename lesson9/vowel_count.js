function countVowel(str) {
  let vowel = "aeiou";
  let input_str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < input_str.length; i++) {
    if (vowel.indexOf(input_str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
let sem = "Hi there,how are you fiot i say to ?";
console.log(countVowel(sem));
