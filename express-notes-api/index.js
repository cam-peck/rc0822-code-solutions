const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:noteId', (req, res) => {
  if (data.notes[req.params.noteId]) {
    res.send(data.notes[req.params.noteId]);
  } else if (!data.notes[req.params.noteId] && isNaN(req.params.noteId)) {
    res.status(400).send(`Error: Your id, ${req.params.noteId}, is not a positive integer.`);
  } else {
    res.status(404).send(`Error: Your id, ${req.params.noteId}, does not exist.`);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
