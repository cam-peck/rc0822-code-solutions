const express = require('express');
const path = require('path');

const app = express();

const publicDirPath = path.join(__dirname, 'public');
console.log(publicDirPath);

const staticMiddleware = express.static(publicDirPath);

app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Listening on Port 3000!');
});
