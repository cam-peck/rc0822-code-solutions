const fs = require('fs');
const fileToCopy = process.argv[2];
const newFileLocation = process.argv[3];

fs.readFile(fileToCopy, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(newFileLocation, data, 'utf8', err => {
    if (err) throw err;
  });
});
