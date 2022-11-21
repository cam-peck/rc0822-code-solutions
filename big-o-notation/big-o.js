/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n = O(n)
    if (!seen[word]) {              // 1 * n = O(n) // if we haven't placed the word in the seen object...
      seen[word] = true;            // 2 * n = O(n)   // place the word in that object with the value true
      unique[unique.length] = word; // 2 * n = O(n)   // add it onto the end of the unique array
    }
  }
  return unique;                    // 1 * 1 = O(1) // will return all of the unique words from the input words array
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n = O(n) // set word to current word
    let isUnique = true;            // 1 * n = O(n) // set isUnique to true
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 1 * n * n = O(n^2) // prevents us from checking word against itself
      c++                           // 2 * n * n = O(n^2) // increments through words before checking word in input words array
    ) {
      const comparing = words[c];   // 2 * n * n = O(n^2) // set comparing to the word at index c
      if (comparing === word) {     // 1 * n * n = O(n^2) // if a dupe of that word exists...
        isUnique = false;           // 1 * n * n = O(n^2) // set isUnique to false (because it's not unique...)
      }
    }
    if (isUnique) {                 // 1 * n = O(n) // after each outer iteration, check if isUnique is true
      unique[unique.length] = word; // 2 * n = O(n) // if it is, add that word onto the unique array
    }
  }
  return unique;                    // 1 * 1 = O(1) // will return all of the unique words from the input words array
} // Big O Notation for uniqueQuadratic: O(n^2)
