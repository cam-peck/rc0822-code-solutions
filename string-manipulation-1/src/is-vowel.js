/* exported isVowel */
function isVowel(char) {
  // declare array with vowels in it for later checking
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  // iterate through each letter of char
  for (let i = 0; i < char.length; i++) {
    // convert char to lowercase
    var lowercaseChar = char[i].toLowerCase();
    // if char is not a vowel, return false
    if (vowelArray.includes(lowercaseChar) === false) {
      return false;
    }
  }
  // if finish iterating, all vowels --> return true
  return true;
}
