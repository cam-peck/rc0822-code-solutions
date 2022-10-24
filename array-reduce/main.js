const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousNum, currentNum) => previousNum + currentNum, 0);
console.log('Value of sum: ', sum);

const product = numbers.reduce((previousNum, currentNum) => previousNum * currentNum);
console.log('Value of product: ', product);

const balance = account.reduce((sum, currentTransaction) => {
  if (currentTransaction.type === 'deposit') {
    return sum + currentTransaction.amount;
  } else {
    return sum - currentTransaction.amount;
  }
}, 0);
console.log('Value of balance: ', balance);

const composite = traits.reduce((result, currentTrait) => {
  return Object.assign(result, currentTrait);
}, {});
console.log('Value of composite: ', composite);
