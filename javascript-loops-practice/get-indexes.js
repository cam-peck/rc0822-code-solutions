/* exported getIndexes */

function getIndexes(array) {
  var output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(i);
  }
  return output;
}

// function getIndexes(array) {
//   var output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array.indexOf(array[i]));
//   }
//   return output;
// }
