/* exported lastChars */
function lastChars(length, string) {
  var output = '';
  if (string[0] === undefined) {
    return '';
  }
  if (length >= string.length) {
    return string;
  }
  for (let i = string.length - length; i < string.length; i++) {
    output += string[i];
  }
  return output;
}

// declare output string
// iterate through input starting at string.length - length (input)
// add each element to output string
// return output string

// add same edge cases from truncate
