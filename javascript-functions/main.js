function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minutesConverterResult = convertMinutesToSeconds(5);
console.log('Result of convert minutes to seconds fx: ', minutesConverterResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Beavis');
console.log('Result of greet fx: ', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(17, 42);
console.log('Result of get area fx: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('Result of get first name fx: ', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Result of get last element fx: ', getLastElementResult);
