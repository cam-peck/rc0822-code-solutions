/* exported union */
function union(array1, array2) {
  var output = [];
  for (let i = 0; i < array1.length; i++) {
    if (!output.includes(array1[i])) {
      output.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!output.includes(array2[i])) {
      output.push(array2[i]);
    }
  }
  return output;
}

// declare output array
// iterate through both arrays
// if a value is not already in output, push it to output
// return the output array
