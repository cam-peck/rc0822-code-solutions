/* exported truncate */
function truncate(length, string) {
  if (string[0] === undefined) {
    return '...';
  }
  if (length >= string.length) {
    return string + '...';
  }
  var output = '';
  for (let i = 0; i < length; i++) {
    output += string[i];
  }
  output += '...';
  return output;
}

// iterate through input string up until length
// concat each element onto output string
// when finished iterating, add ellipsis
// return output string

// catch empty string edge case --> if index 0 is undefined return ...
// catch long string edge case --> compare string lengths and return original string
