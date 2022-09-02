/* exported defaults */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  for (const key in source) {
    if (!targetKeys.includes(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

// store a list of keys from the target object in variable targetKeys
// iterate through source object
// if current key is in targetKeys, continue iterating
// if current key is not in targetKeys, add that key/value pair to target
// return target
