/* exported reverseWords */
function reverseWords(string) {
  var stringAsArray = string.split(' ');
  for (let i = 0; i < stringAsArray.length; i++) {
    stringAsArray[i] = stringAsArray[i].split('').reverse().join('');
  }
  return stringAsArray.join(' ');
}

// split the words by spaces into an array
// iterate through the array
// reverse the letter order of each word
// rejoin the array into final string
