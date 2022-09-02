/* exported ransomCase */
function ransomCase(string) {
  var output = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) { // even case
      output += string[i].toLowerCase();
    } else {
      output += string[i].toUpperCase(); // odd case
    }
  }
  return output;
}

// declare output string
// iterate through string, use modulo operator to determine upper or lower
// if modulo gives no remainder, even num --> lowercase
// if modulo gives remainder, odd num --> uppercase
// return the output string when finished iterating

// 0 % 2 gives 0
