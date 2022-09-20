/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = []; // holds transaction objects when deposit / withdrawl is made
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && amount % 1 === 0) { // check that amount is a positive number
    var depTransaction = new Transaction('deposit', amount);
    this.transactions.push(depTransaction);
    return true;
  } else return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount % 1 === 0) { // check that amount is a positive number
    var witTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(witTransaction);
    return true;
  } else return false;
};

Account.prototype.getBalance = function () {
  var total = 0;
  this.transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      total += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      total -= transaction.amount;
    } else { return 'invalid transaction with type: ' + transaction.type + '& amount: ' + transaction.amount; }
  });
  return total;
};
