const fs = require('fs');
const filesToRead = [];

for (let i = 2; i < process.argv.length; i++) {
  filesToRead.push(process.argv[i]);
}

function readFile(fileToRead) {
  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    getNextFile(); // until this function finishes, it won't load the next file
  });
}

function getNextFile() {
  if (filesToRead[0] !== undefined) { // files to read remain
    const nextFile = filesToRead.shift();
    readFile(nextFile);
  }
}

getNextFile();
