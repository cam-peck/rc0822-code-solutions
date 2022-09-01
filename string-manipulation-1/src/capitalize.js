/* exported capitalize */
function capitalize(word) {
  // declare empty string variable output
  var output = '';
  // convert first letter (index 0) to lowercase & add to output
  output += word[0].toUpperCase();
  // iterate through remaining letters
  for (let i = 1; i < word.length; i++) {
    // convert to lowercase & add to output
    output += word[i].toLowerCase();
  }
  // return output
  return output;
}
