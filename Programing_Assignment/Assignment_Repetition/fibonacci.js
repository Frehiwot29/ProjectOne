/**
 * Write a defining table and a program that outputs the first 25 numbers 
 * in this Fibonacci series: 0, 1, 1, 2, 3, 5, 8, … 46368
 * 
*/
let i = 0;
let j = 1;
let count = 1;
let output = "";
output = output + i + ", " + j + ","
console.log(1);
while (count <= 23) {
    let next = i + j;
    output = output + next + " ,"
    i = j
    j = next;
    count++;

}
console.log(output);