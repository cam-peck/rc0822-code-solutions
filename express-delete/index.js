const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

app.delete('/api/grades/:id', (req, res) => {
  if (grades[req.params.id]) {
    delete grades[req.params.id];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
