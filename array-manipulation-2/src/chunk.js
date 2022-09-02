/* exported chunk */
// function chunk(array, size) {
//   var i = 0;
//   var interval = size;
//   var output = [];
//   while (i < array.length) {
//     output.push(array.slice(i, size));
//     i += interval;
//     size += interval;
//   }
//   return output;
// }

// big picture
// take a slice out of array of size n
// if remaining elements are longer than n, take another slice
// else, put final elements into their own array
// return final array

// more detail
// set interval to increment by to desired array size input
// use a while loop to push array slices of size interval into output
// during each iteration, increment i and size by the interval to get the next slice
// when i is longer than length of input array, you're done iterating
// return the output

// without slice

function chunk(array, size) {
  var output = [];
  var currentArray = [];
  var x = 0;
  var interval = size;
  while (x < array.length) {
    if (size > array.length) { // catch the final numbers of the array
      for (let i = 0; i < array.length - x; i++) {
        currentArray.push(array[x + i]);
      }
      output.push(currentArray);
      return output;
    }
    for (let i = x; i < size; i++) {
      currentArray.push(array[i]);
    }
    output.push(currentArray);
    currentArray = [];
    x += interval;
    size += interval;
  }
  return output;
}

// solve similarly to using slice except use a for loop in main body
// for loop pushes each element to a current array
// when finished iterating, push this current array into the output
// continue this until the size of remaining elements is longer than the desired array size
// when this happens, push only the number of remaining elements to the currentarray
// then add that final currentarray to output
// return output!
