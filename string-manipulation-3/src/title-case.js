/* exported titleCase */
// weird colon case needs fixed... (REEE!)
function titleCase(title) {
  var splitTitle = title.split(' ');
  var output = '';
  // var colon = false;
  var acronyms = ['API'];
  var lowercaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
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
    if (i === 0 && !Object.keys(specialWords).includes(splitTitle[i].toLowerCase()) && !acronyms.includes(splitTitle[i].toUpperCase())) { // capitalize first letter if other two cases are false AND i === 0
      output += capitalizeWord(splitTitle[i]); // capitalize first word
    }
    if (i !== 0 && !Object.keys(specialWords).includes(splitTitle[i].toLowerCase()) && !acronyms.includes(splitTitle[i].toUpperCase())) {
      if (splitTitle[i].length > 3) { // capitalize all words longer than 3 char
        output += capitalizeWord(splitTitle[i]);
      } else if (lowercaseWords.includes(splitTitle[i].toLowerCase())) {
        output += lowercaseWord(splitTitle[i]);
      } else {
        output += capitalizeWord(splitTitle[i]);
      }
    }
    if (i !== splitTitle.length - 1) { output += ' '; }
  }
  // console.log(output);
  return output;
}

function capitalizeWord(word) {
  var currentWord = '';
  currentWord += word[0].toUpperCase(); // capitalize first letter
  for (let j = 1; j < word.length; j++) { // lowercase remaining letters
    currentWord += word[j].toLowerCase();
  }
  return currentWord;
}

function lowercaseWord(word) {
  var currentWord = '';
  for (let j = 0; j < word.length; j++) { // lowercase remaining letters
    currentWord += word[j].toLowerCase();
  }
  return currentWord;
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
