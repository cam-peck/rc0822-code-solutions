/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var output = [];
  for (let i = 0; i < words.length; i++) {
    output.push(words[i] + suffix);
  }
  return output;
}

// function addSuffixToAll(words, suffix) {
//   var mapped = words.map(word => word + suffix);
//   return mapped;
// }
