/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// iterate through input array
// if value at current index is input value --> return true
// if finish iterating and didn't find value --> return false
