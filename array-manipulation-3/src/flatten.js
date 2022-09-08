/* exported flatten */
function flatten(array) {
  var output = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
