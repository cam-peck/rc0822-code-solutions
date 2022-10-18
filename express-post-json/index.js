const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

const jsonParser = express.json();

app.use(jsonParser); // parses incoming JSON requests and puts the parsed data in req.body

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  req.body.nextId = nextId;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
