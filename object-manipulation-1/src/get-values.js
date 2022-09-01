/* exported getValues */
function getValues(object) {
  var output = [];
  for (const key in object) {
    output.push(object[key]);
  }
  return output;
}

// declare empty array for output
// iterate through the values of object using for loop
// push each object key to the output array
// return the output array
