/* exported isAnagram */

// using arrays

function compareArrays(array1, array2) {
  // sorts the two arrays and them compares them -- returns t/f //
  var sortedArray1 = array1.sort();
  var sortedArray2 = array2.sort();
  for (let i = 0; i < array1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }
  return true;
}

function isAnagram(firstString, secondString) {
  var firstStringArray = firstString.replace(/\s+/g, '').split('');
  var secondStringArray = secondString.replace(/\s+/g, '').split('');
  if (firstStringArray.length !== secondStringArray.length) {
    return false; // they have a different number of letters
  }
  return compareArrays(firstStringArray, secondStringArray);
}
// anagrams contain the exact same letters
// remove spaces from both strings for easy manipulation and turn into arrays
// make sure length is the same -- otherwise return false
// compare the two arrays
// sort them first for order
// then loop through each index of the array and check for sameness
// if all same, return true out to isAnagram function

// using objects

// function isAnagram(firstString, secondString) {
//   var firstObj = {};
//   var secondObj = {};
//   var noSpaceFirstString = firstString.replace(/\s+/g, '');
//   var noSpaceSecondString = secondString.replace(/\s+/g, '');
//   if (noSpaceFirstString.length !== noSpaceSecondString.length) {
//     return false; // they have a different number of letters
//   }
//   for (let i = 0; i < noSpaceFirstString.length; i++) {
//     var currString1Letter = noSpaceFirstString[i];
//     var currString2Letter = noSpaceSecondString[i];
//     if (Object.keys(firstObj).includes(currString1Letter)) {
//       firstObj[currString1Letter]++;
//     } else { firstObj[currString1Letter] = 1; }
//     if (Object.keys(secondObj).includes(currString2Letter)) {
//       secondObj[currString2Letter]++;
//     } else { secondObj[currString2Letter] = 1; }
//   }
//   return compareObjects(firstObj, secondObj);
// }

// function compareObjects(object1, object2) {
//   for (const key in object1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// anagrams contain the exact same letters
// remove spaces from both strings for easy manipulation
// store letters from first string in an object
// the letter becomes the key, the amount it appears is the value
// create an identical object for string2
// compare the two objects --> if they're the same return true
// if they're different return false
