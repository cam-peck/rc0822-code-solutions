/* exported numVowels */
function numVowels(string) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var counter = 0;
  for (let i = 0; i < string.length; i++) {
    var lowerChar = string[i].toLowerCase();
    if (vowelArray.includes(lowerChar)) {
      counter++;
    }
  }
  return counter;
}

// create array with vowels in it for reference
// create empty output variable to store counter in
// iterate through the input string
// call toLowerCase method on each element
// check if array includes that letter
// if it does, increment counter by one
// if it doesn't, continue iterating
// return the final vowel counter
