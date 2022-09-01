/* exported reverse */
function reverse(array) {
  // declare empty array as output
  var output = [];
  // get array length and store in arrayLength variable
  var arrayLength = array.length;
  // iterate backwards through the array, starting at arrayLength - 1
  for (let i = arrayLength - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  // return the output array
  return output;
}
