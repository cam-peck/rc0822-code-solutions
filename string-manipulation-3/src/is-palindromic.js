/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaceOriginal = string.replace(/\s+/g, '');
  var reversedString = string.replace(/\s+/g, '').split('').reverse().join('');
  if (reversedString === noSpaceOriginal) {
    return true;
  }
  return false;
}

// we need to compare the forward string to the backward string
// if they're the same, it's a palindrome --> return true
// if they're not the same, not a palindrome --> return false
// to do this...
// split the forward string into an array
// call the reverse method on the array
// rejoin the array
// compare this rejoined array to input string
