const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => { // GET requests for all notes
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:noteId', (req, res) => { // GET requests for notes with a specific ID
  if (data.notes[req.params.noteId]) { // id does exist
    res.send(data.notes[req.params.noteId]);
  } else if (!data.notes[req.params.noteId] && isNaN(req.params.noteId)) { // id is not an integer
    res.status(400).send(`Error: Your id, ${req.params.noteId}, is not a positive integer.`);
  } else { // id is an integer, but does not exist
    res.status(404).send(`Error: Your id, ${req.params.noteId}, does not exist.`);
  }
});

app.post('/api/notes', (req, res) => { // POST requests for a new note
  if (!req.body.content) {
    res.status(400).send('Error: No content attached. Ensure your key name is "content", followed by your desired value.');
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newJSON, 'utf8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        res.status(500).send('Error: An unexpected error occured.');
      } else {
        res.status(201).send(req.body);
      }
    });
  }
});

app.delete('/api/notes/:noteId', (req, res) => {
  if (data.notes[req.params.noteId]) { // id does exist
    delete data.notes[req.params.noteId];
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('troll/data.json', newJSON, 'utf8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        res.status(500).send('Error: An unexpected error occured.');
      } else {
        res.sendStatus(204);
      }
    });
  } else if (!data.notes[req.params.noteId] && isNaN(req.params.noteId)) { // id is not an integer
    res.status(400).send(`Error: Your id, ${req.params.noteId}, is not a positive integer.`);
  } else { // id is an integer, but does not exist
    res.status(404).send(`Error: Your id, ${req.params.noteId}, does not exist.`);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
