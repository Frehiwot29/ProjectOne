/**
 * write a line of code using map method that map an array ["hi","Hello","Bye"] to an array 
 * ["HI","HELLO","BYE"]
*/
let arr = ["hi", "Hello", "Bye"];
let arr2 = arr.map(s => s.toUpperCase());
console.log(arr2);