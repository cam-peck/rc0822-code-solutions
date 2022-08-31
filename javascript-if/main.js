/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(num) {
  return num < 5;
}

function isEven(num) {
  return num % 2 === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) return 'neutral';
  else if (pH >= 0 && pH < 7) return 'acid';
  else if (pH <= 14 && pH > 7) return 'base';
  else return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name === 'wakko' || name === 'yakko') return 'We\'re the warner brothers!';
  else if (name === 'dot') return 'I\'m cute';
  else return 'Goodnight everybody!';
}
