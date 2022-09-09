/* exported difference */
function difference(array1, array2) {
  var output = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      output.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      output.push(array2[i]);
    }
  }
  return output;
}

// create output variable with empty array
// iterate through all indexes of array 1 and 2
// we need to check both arrays, so...
// for each index in array 1, check against array 2
// for each index in array 2, check against array 1
// push any indexes that aren't in the other array to output
// return output when finished iterating
