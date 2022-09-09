/* exported intersection */
function intersection(array1, array2) {
  var output = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      output.push(array1[i]);
    }
  }
  return output;
}

// solve the same way as difference but check for shared values instead of different
// we also only need to check once to avoid double values
