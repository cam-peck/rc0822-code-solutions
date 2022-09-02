/* exported pick */
function pick(source, keys) {
  var output = {};
  for (const key in source) {
    if (keys.includes(key)) {
      if (source[key] !== undefined) {
        output[key] = source[key];
      }
    }
  }
  return output;
}

// iterate through source object
// if keys includes that object, add that key & associated value to output
// return output

// check from undefined edge case!
