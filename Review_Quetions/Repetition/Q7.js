/**
 * Write a loop to count by three from zero to nine. 
 * After the loop is finished, your counting variable should hold the value 9.
*/
let i = 0;
let count = 0;
while (i < 9) {
    console.log(i)
    if (i === 9) {
        break;
    }
    count++;
    i += 3;
}
console.log(i);
