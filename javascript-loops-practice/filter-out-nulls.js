/* exported filterOutNulls */

function filterOutNulls(values) {
  var output = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      output.push(values[i]);
    }
  }
  return output;
}

// function filterOutNulls(values) {
//   var filtered = values.filter(function (el) {
//     return el !== null;
//   });
//   return filtered;
// }
