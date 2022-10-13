const fs = require('fs');
const randomNum = String(Math.random() * 100);

fs.writeFile('random.txt', randomNum + '\n', 'utf8', err => {
  if (err) throw err;
});
