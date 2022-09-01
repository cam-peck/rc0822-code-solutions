/* exported toObject */
function toObject(keyValuePair) {
  var output = {};
  output[keyValuePair[0]] = keyValuePair[1];
  return output;
}

// declare empty object literal for output
// add key / value pair to empty object
// return object
