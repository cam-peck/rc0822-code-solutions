/* exported invert */
function invert(source) {
  var output = {};
  for (const key in source) {
    var currentKey = key;
    var currentValue = source[key];
    output[currentValue] = currentKey;
  }
  return output;
}

// declare empty output object
// iterate through keys and values of source object
// set value as key and key as value
// return object when finished iterating
