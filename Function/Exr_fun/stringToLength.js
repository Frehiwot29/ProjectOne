let myArr = ["apple", "ball", "cat"];
// console.log(myArr.map(myMapper));
// function myMapper(str) {
//     return str.length;
// }
function mapStringToItsLength(arr) {
    let mapper_arr = [];
    for (let i = 0; i < arr.length; i++) {
        mapper_arr[i] = arr[i].length;
    }
    return mapper_arr;

}
let my_arr = mapStringToItsLength(myArr);
console.log(my_arr);