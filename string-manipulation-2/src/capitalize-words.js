/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitArray = string.split(' ');
  var currentWord = '';
  var outputArray = [];
  for (let i = 0; i < splitArray.length; i++) {
    currentWord += splitArray[i][0].toUpperCase();
    for (let j = 1; j < splitArray[i].length; j++) {
      currentWord += splitArray[i][j].toLowerCase();
    }
    outputArray.push(currentWord);
    currentWord = '';
  }
  return outputArray.join(' ');
}

// split the input string by ' ' into an array of strings
// iterate through the arrays, capitalizing the first character
// add capital letter to currentWord
// iterate through each word in the array, lowercase the remaining characters
// add lowercase letters to currentWord
// push currentWord to output, reset currentWord for next iteration
// rejoin the arrays, adding the space back in & return it
