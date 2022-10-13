const fs = require('fs');
const userContent = process.argv[2];

fs.writeFile('note.txt', userContent + '\n', 'utf8', err => {
  if (err) throw err;
});
