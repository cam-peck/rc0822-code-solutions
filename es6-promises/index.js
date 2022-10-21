const takeAChance = require('./take-a-chance');

var returnedPromise = takeAChance('Cameron');

returnedPromise.then(success => {
  console.log(success);
}).catch(failure => {
  console.log(failure.message);
});
