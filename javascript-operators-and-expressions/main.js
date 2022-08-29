var width = 100;
var height = 250;
var area = width * height;

console.log('The area is', area);
console.log('The type of area is: ', typeof area);

var bill = 3.25;
var payment = 4.00;
var change = payment - bill;

console.log('Your change is', change);
console.log('The type of change is: ', typeof change);

var quizzes = 80;
var midterm = 88;
var final = 93;
var grade = ((quizzes + midterm + final) / 3);

console.log('Your grade is', grade);
console.log('The type of grade is: ', typeof grade);

var firstName = 'Cameron';
var lastName = 'Peck';
var fullName = firstName + ' ' + lastName;
console.log('Hi' + ' ' + fullName);
console.log('The type of fullName is: ', typeof fullName);

var pH = 14;
var isAcidic = pH < 7;

console.log('Value of isAcidic: ', isAcidic);
console.log('The type of isAcidic is: ', typeof isAcidic);

var headCount = 285;
var isSparta = (headCount === 300);

console.log('Value of isSparta: ', isSparta);
console.log('The type of isSparta is: ', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';

console.log(motto);
console.log('The type of motto is: ', typeof motto);
