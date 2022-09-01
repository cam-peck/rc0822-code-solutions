/* exported compact */
function compact(array) {
  // iterate through each index of the array
  var output = [];
  for (let i = 0; i < array.length; i++) {
    // check if element at that index is truthy or falsey
    if (!!array[i] === true) {
      // if truthy, push to output array
      output.push(array[i]);
    }
  }
  // return the final array
  return output;
}
