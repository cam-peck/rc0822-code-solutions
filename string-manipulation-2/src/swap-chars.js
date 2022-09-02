/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var output = string;
  var splitOutput = output.split('');
  splitOutput[firstIndex] = string[secondIndex];
  splitOutput[secondIndex] = string[firstIndex];
  var joinedOutput = splitOutput.join('');
  return joinedOutput;
}

// declare output as input string
// split output into an array
// swap the two indexes in the array for output (not the original string)
// use the original string as reference for the indexes
// join output string back together
// return output
