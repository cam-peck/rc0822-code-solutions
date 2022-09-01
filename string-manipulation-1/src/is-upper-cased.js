/* exported isUpperCased */
function isUpperCased(word) {
  // iterate through each letter in word
  for (let i = 0; i < word.length; i++) {
    // if letter is lowercase, return false
    if (word[i].toLowerCase() === word[i]) {
      return false;
    }
  }
  return true;
  // if complete iterating, no letters are lower => return true
}
