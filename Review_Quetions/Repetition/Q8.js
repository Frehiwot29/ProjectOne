/**
 * Write a loop to count backwards from 90 to 81.
 * After the loop is finished,
 * your counting variable should hold the value 81.
*/
let i = 90;
for (; i >= 81; i--) {
    console.log(i);
    if (i === 81) {
        break;
    }
}
//console.log(i);