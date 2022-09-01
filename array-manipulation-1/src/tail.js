/* exported tail */
function tail(array) {
  // declare empty output array
  var output = [];
  // iterate through array starting at index 1
  for (let i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  // return output array
  return output;
}
