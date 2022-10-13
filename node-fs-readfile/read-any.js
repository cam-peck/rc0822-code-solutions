const fs = require('fs');

const fileToRead = process.argv[2];

fs.readFile(fileToRead, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
