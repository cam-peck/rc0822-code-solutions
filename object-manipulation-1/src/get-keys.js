/* exported getKeys */
function getKeys(object) {
  var output = [];
  for (const key in object) {
    output.push(key);
  }
  return output;
}

// declare empty array for output
// iterate through the keys of object using for loop
// push each object key to the output array
// return the output array
