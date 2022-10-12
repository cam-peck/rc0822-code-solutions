const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

const operationsObj = {
  plus: add,
  minus: subtract,
  times: multiply,
  over: divide
};

let result;
let errorFound = false;

for (const key in operationsObj) { // check operations object and evaluate result if operation exists
  if (operator === key) {
    const desiredOperation = operationsObj[key];
    result = desiredOperation(num1, num2);
    if (result % 1 !== 0) { // catch non-whole numbers -- round to 2 decimals
      result = result.toFixed(2);
    }
  }
}

if (isNaN(num1) || isNaN(num2)) { // check for integer errors
  console.log('One (or both) of your inputs is not an integer.');
  errorFound = true;
}

if (!Object.keys(operationsObj).includes(operator)) { // check for operation errors
  console.log(`The operation "${operator}" does not exist. Current operations are ${Object.keys(operationsObj)}.`); // operation not in operation object
  errorFound = true;
}

if (errorFound === false) { // if no errors, print result
  console.log(`Result: ${result}`);
}
