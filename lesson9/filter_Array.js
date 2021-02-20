function filterArray(arr) {
  let original_array = ["this", "that", "hi_there", "how_are_you"];
  let arr = original_array.filter((s) => s.indexOf("_"));
}
console.log(filterArray(arr));
