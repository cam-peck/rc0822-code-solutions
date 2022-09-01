/* exported isLowerCased */
function isLowerCased(word) {
  // iterate through each letter in word
  for (let i = 0; i < word.length; i++) {
    // check that char is a letter
    var letterCheck = word[i].toUpperCase() !== word[i].toLowerCase();
    if (letterCheck === false) {
      // if it is a letter, continue into next iteration of the loop
      continue;
    }
    // if letter is uppercase, return false
    if (word[i].toUpperCase() === word[i]) {
      return false;
    }
  }
  return true;
  // if complete iterating, no letters are lower => return true
}
