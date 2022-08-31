// The Math Object //
var a = 7;
var b = 2;
var c = 3;

var maximumValue = Math.max(a, b, c);
console.log('Value of maximumValue: ', maximumValue);

var heroes = ['Dr. Strange', 'Spiderman', 'Thor', 'Captain America'];

var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Value of randomHero: ', randomHero);

// Array Methods //
var library = [
  {
    title: 'Dragonriders of Pern',
    author: 'Anne McCaffery'
  },
  {
    title: 'The Sword of Shannara',
    author: 'Terry Brooks'
  },
  {
    title: 'The Knight',
    author: 'Gene Wolfe'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

// String Methods //
var fullName = 'Cameron Peck';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName!!!!!!!: ', sayMyName);
