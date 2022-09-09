/* exported zip */
function zip(array1, array2) {
  var output = [];
  var shorterArrayLength = 0;
  if (array1.length < array2.length) {
    shorterArrayLength = array1.length;
  } else {
    shorterArrayLength = array2.length;
  }
  for (let i = 0; i < shorterArrayLength; i++) {
    output.push([array1[i], array2[i]]);
  }
  return output;
}

// declare empty array for output
// find which array is shorter, iterate up to that arrays length
// at each index, push a new array to the output array that contains...
// the data stored at that index in array 1 and array 2
// when finished iterating, return output
