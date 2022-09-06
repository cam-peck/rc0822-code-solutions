/* exported titleCase */
function titleCase(title) {
  var splitTitle = title.split(' ');
  var output = '';
  // var colon = false;
  var acronyms = ['API'];
  var specialWords = {
    javascript: 'JavaScript'
  };

  for (let i = 0; i < splitTitle.length; i++) { // iterate through each word in array
    for (const key in specialWords) { // check specialwords object for weird cases
      if (splitTitle[i].toLowerCase() === key) {
        output += specialWords[key]; // add correctly cased example to output
      }
    }
    if (acronyms.includes(splitTitle[i].toUpperCase())) { // check acronyms array
      output += splitTitle[i].toUpperCase(); // if includes, add all caps to result
    }
  }
  // console.log(output);
  return output;
}
// oh my...

// capitalize cases
// first letter is always capitalized
// first letter after a ':' is also capitalized
// both sides of a hyphenated word get capitalized
// all words longer than 4 letters

// 1, 2, & 3 letter word lowercase cases
// conjugations
// articles
// prepositions

// special cases
// JavaScript is always cased as JavaScript
// acronyms should always be fully capitalized (such as API)

// method
// split the string by spaces into an array of words
// capitalize the first word
// iterate through the array starting at index 1 (not 0!)
// check special cases
// check lowercase cases
// else capitalize
// rejoin final array as string and return out of function
