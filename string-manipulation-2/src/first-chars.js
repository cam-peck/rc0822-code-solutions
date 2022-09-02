/* exported firstChars */
function firstChars(length, string) {
  var output = '';
  if (string[0] === undefined) {
    return '';
  }
  if (length >= string.length) {
    return string;
  }
  for (let i = 0; i < length; i++) {
    output += string[i];
  }
  return output;
}

// declare output string
// iterate through input string up to length (condition)
// add each element to output string
// return output string

// add same edge cases from truncate
