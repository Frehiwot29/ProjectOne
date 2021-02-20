function fillMyArray(empty_arr, n) {
    for (let i = 0; i < n; i++) {
        empty_arr[i] = Math.floor(Math.random() * 10);
    }
}
scores = [];
fillMyArray = (scores, 10);
console.log(empty_arr);