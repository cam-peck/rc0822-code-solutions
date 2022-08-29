var student = {
  firstName: 'Cameron',
  lastName: 'Peck',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'ESL Teacher';

console.log('Value of livesInIrvine: ', student.livesInIrvine);
console.log('Value of previousOccupation: ', student.previousOccupation);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Toyota',
  model: 'Miata',
  year: 1999
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = true;

console.log('Value of color: ', vehicle.color);
console.log('Value of isConvertible: ', vehicle.isConvertible);
console.log('Value of vehicle obj: ', vehicle);

var pet = {
  name: 'Josie',
  type: 'Beagle'
};

delete pet.name;
delete pet.type;

console.log('Value of pet obj: ', pet);
