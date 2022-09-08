/* exported titleCase */
// weird colon case needs fixed... (REEE!)
function titleCase(title) {
  var splitTitle = title.split(' ');
  var output = '';
  var colon = false;
  var done = false;
  var acronyms = ['API'];
  var lowercaseWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var specialWords = {
    javascript: 'JavaScript'
  };

  for (let i = 0; i < splitTitle.length; i++) { // iterate through each word in array
    done = false;
    if (splitTitle[i].split('-').length === 2) { // check for hyphens
      output += capitalizeHyphen(splitTitle[i]);
      done = true;
    }
    if (colon === true) { // if there was a colon in the previous word, capitalize the next word
      output += capitalizeWord(splitTitle[i]);
      colon = false;
      done = true;
    }
    if (splitTitle[i].split(':').length === 2) { // if a colon was present in last word, it's treated here
      splitTitle[i] = splitTitle[i].split(':')[0]; // remove colon from current word so that it can continue down the chain normally
      colon = true;
    }
    for (const key in specialWords) { // check for special cased words
      if (splitTitle[i].toLowerCase() === key) {
        output += specialWords[key]; // add correctly cased example to output
        done = true;
      }
    }
    if (acronyms.includes(splitTitle[i].toUpperCase())) { // check acronyms array
      output += splitTitle[i].toUpperCase(); // if includes, add all caps to result
      done = true;
    }
    if (i === 0 && done === false) { // always capitalize first word
      output += capitalizeWord(splitTitle[i]);
    }
    if (i !== 0 && done === false) {
      if (splitTitle[i].length > 3) { // capitalize all words longer than 3 char
        output += capitalizeWord(splitTitle[i]);
      } else if (lowercaseWords.includes(splitTitle[i].toLowerCase())) { // lowercase all prepositions, articles, and conjunctions
        output += lowercaseWord(splitTitle[i]);
      } else {
        output += capitalizeWord(splitTitle[i]); // else give it the capitalize treatment
      }
    }
    if (colon === true) { // if removed a colon earlier, add it back here
      output += ':';
    }
    if (i !== splitTitle.length - 1) { output += ' '; } // add space to all words except for last
  }
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

function capitalizeHyphen(word) {
  var splitByHyphen = word.split('-');
  for (let k = 0; k < splitByHyphen.length; k++) {
    splitByHyphen[k] = capitalizeWord(splitByHyphen[k]);
  }
  return splitByHyphen.join('-');
}

// method
// split the string by spaces into an array of words
// if a word is added to output during special cases, change done boolean to true so that we don't get doubles.
// check for hyphens --> if present capitalize both sides of the hyphen
// check for colons --> if present remove the colon (so that the word before the colon can run) and set colon variable to true
// during the next iteration, we need to capitalize the following word if colon is true.
// check for acronyms --> if array includes that acronym capitalize all letters
// check for special cased words --> if object includes the word, add the value at that key to the output
// check for first word in the sentence --> if done is false (haven't added to output yet), capitalize the first letter
// check for non-first word in the sentence --> if done is false...
// check for prepositions, conjuctions, and articles --> all lowercase
// check for words longer than 3 letters --> all uppercase
// else give it the capital treatment --> its a short three letter word like 'car'
// re-add the colon if we removed it earlier
// add a space between all words except for the last one
// return the final output after finished iterating
