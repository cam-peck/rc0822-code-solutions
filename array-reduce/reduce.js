function reduce(array, reducer, initialValue) {
  let result = null;

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      if (initialValue !== undefined) { // if initial value, first iteration cb is reducer(initialValue, array[0])
        result = initialValue;
      } else { // if no initial value, first iteration cb is reducer(array[0], array[1])
        result = array[0];
        i++; // increment i to jump start the loop at 1 since we're using element 0 as the first result
      }
    }
    result = reducer(result, array[i]);
  }
  return result;
}

const nums = [1, 2, 3];
const sum = (x, y) => {
  return x + y;
};

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const test1 = reduce(nums, sum);

const test2 = reduce(account, (sum, currentTransaction) => {
  if (currentTransaction.type === 'deposit') {
    return sum + currentTransaction.amount;
  } else {
    return sum - currentTransaction.amount;
  }
}, 0);

console.log(test1);
console.log(test2);
