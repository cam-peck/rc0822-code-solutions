// Global Variables & Imports //

const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

// Paths //

app.get('/api/notes', (req, res) => { // GET requests for all notes
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:noteId', (req, res) => {
  if (data.notes[req.params.noteId]) {
    res.send(data.notes[req.params.noteId]);
  } else {
    handleParamErrors(req, res);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send('Error: No content attached. Ensure your key name is "content", followed by your desired value.');
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    overwriteJSON(data, res);
    res.status(201).send(data.notes[data.nextId - 1]);
  }
});

app.delete('/api/notes/:noteId', (req, res) => {
  if (data.notes[req.params.noteId]) {
    delete data.notes[req.params.noteId];
    overwriteJSON(data, res);
    res.sendStatus(204);
  } else {
    handleParamErrors(req, res);
  }
});

app.put('/api/notes/:noteId', (req, res) => {
  if (data.notes[req.params.noteId]) {
    if (req.body.content) {
      data.notes[req.params.noteId].content = req.body.content;
      overwriteJSON(data, res);
      res.send(data.notes[req.params.noteId]);
    } else {
      res.status(400).send('Error: No content attached. Ensure your key name is "content", followed by your desired value.');
    }
  } else {
    handleParamErrors(req, res);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

// Helper Functions //

function overwriteJSON(data, res) { // takes data to overwrite current data.json file with and rewrites the file
  const newJSON = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newJSON, 'utf8', err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).send('Error: An unexpected error occured.');
    }
  });
}

function handleParamErrors(req, res) { // handles errors in passed in parameters by the user
  if (!data.notes[req.params.noteId] && isNaN(req.params.noteId)) { // id is not an integer
    res.status(400).send(`Error: Your id, ${req.params.noteId}, is not a positive integer.`);
  } else { // id is an integer, but does not exist
    res.status(404).send(`Error: Your id, ${req.params.noteId}, does not exist.`);
  }
}
