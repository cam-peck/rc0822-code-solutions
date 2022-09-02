/* exported capitalizeWord */
function capitalizeWord(word) {
  var output = '';
  output += word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  if (output === 'Javascript') {
    return 'JavaScript';
  }
  return output;
}

// catch edge case of Javascript
// after for loop --> check for Javascript string --> return JavaScript

// declare empty string variable output
// convert first letter (index 0) to lowercase & add to output
// iterate through remaining letters
// convert to lowercase & add to output
// return output
