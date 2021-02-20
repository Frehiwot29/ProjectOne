/**
 * • Write a program to map ["apple", "ball", "cat"] into a new array that
     contains number of characters in each word, in our case mapped array
     would be [5,4,3]
       • First write a function that uses loop for mapping.
       • Then use the map() method.
   • Hint: like array string also have length property that returns length
      of a string.
*/
const arr = ["apple", "ball", "cat"];
function mapToLength(str_arr) {
    let temp_arr = [];
    for (let i = 0; i < str_arr.length; i++) {
        temp_arr[i] = str_arr[i].length;

    }
    return temp_arr;
}
console.log(arr);
console.log(mapToLength(arr));
console.log(arr);
console.log("Map_Version===========: ");
const arr1 = ["apple", "ball", "cat"];
console.log(arr1);
console.log(arr1.map(s => s.length));
console.log(arr1);
