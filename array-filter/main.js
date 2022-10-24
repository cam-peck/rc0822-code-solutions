const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Value of evenNumbers: ', evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log('Value of overFive: ', overFive);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const startWithE = names.filter(name => name[0] === 'E');
console.log('Value of startWithE: ', startWithE);

const haveD = names.filter(name => /[dD]/.test(name));
console.log('Value of haveD: ', haveD);
