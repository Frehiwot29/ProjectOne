const arr = [1, 2, 3, 4, 5, 6, 7];
const odd_arr = arr.filter(myEvenfilter);
console.log(odd_arr);
function myEvenfilter(n) {
    if (n % 2 !== 0) {
        return true;

    } else {
        return false;
    }


}