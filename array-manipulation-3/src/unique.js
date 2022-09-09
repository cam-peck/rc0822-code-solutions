/* exported unique */
function unique(array) {
  var output = [];
  for (let i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}

// declare empty array as output
// iterate through each element from input array
// if output contains that element, skip it
// else push that element to output
// when finished iterating, return output
