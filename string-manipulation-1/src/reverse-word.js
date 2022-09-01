/* exported reverseWord */
function reverseWord(word) {
  // store length of word in wordLength variable
  var wordLength = word.length;
  // store empty string in output variable
  var output = '';
  // iterate through the letters of word backwards
  for (let i = wordLength - 1; i >= 0; i--) {
    // add each letter to output variable
    output += word[i];
  }
  return output;
  // when finished iterating, return output variable
}

// don't forget last index is wordLength - 1; otherwise you get undefined!!
