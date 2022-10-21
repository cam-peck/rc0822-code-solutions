const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
  SELECT *
  FROM "grades"
  `;
  db.query(sql).then(result => { // query succeded, promise fulfilled
    const gradeData = result.rows;
    res.json(gradeData);
  }).catch(err => { // query failed, promise rejected
    // eslint-disable-next-line no-console
    console.err(err);
    res.status(500).send('Error: An unexpected error occured');
  });
});

app.post('/api/grades', (req, res, next) => {
  const studentName = req.body.name;
  const studentCourse = req.body.course;
  const studentScore = req.body.score;
  if (!studentName || !studentCourse || !studentScore) { // parameters are missing from the input
    res.status(400).send('Error: Be sure to include name, course, and score in your request header.');
    return;
  }
  if (isNaN(Number(studentScore)) || studentScore < 0 || studentScore > 100) { // grade value is invalid in input
    res.status(400).send('Error: Invalid score --> valid scores are integers between 0 and 100');
    return;
  }
  const sql = `
  INSERT INTO "grades" ("name", "course", "score")
  VALUES ($1, $2, $3)
  RETURNING *;
  `;
  const params = [studentName, studentCourse, studentScore];
  db.query(sql, params).then(result => {
    const newEntry = result.rows[0];
    res.status(201).send(newEntry);
  }).catch(err => {
    // eslint-disable-next-line no-console
    console.err(err);
    res.status(500).send('Error: An unexpected error occured');
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express Server listening on port 3000');
});
