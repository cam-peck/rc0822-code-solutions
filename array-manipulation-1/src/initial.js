/* exported initial */
function initial(array) {
  // declare empty array as output variable
  var output = [];
  // iterate through input array up to index before the last
  for (let i = 0; i < array.length - 1; i++) {
    // push each element into output array
    output.push(array[i]);
  }
  return output;
  // return output array
}
