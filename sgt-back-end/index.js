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
    console.error(err);
    res.status(500).send('Error: An unexpected error occured');
  });
});

app.post('/api/grades', (req, res, next) => {
  const studentName = req.body.name;
  const studentCourse = req.body.course;
  const studentScore = Number(req.body.score);
  if (!studentName || !studentCourse || !studentScore) { // parameters are missing from the input
    res.status(400).send('Error: Be sure to include name, course, and score in your request header.');
    return;
  }
  if (!Number.isInteger(studentScore) || studentScore < 0 || studentScore > 100) { // grade value is invalid in input
    res.status(400).send('Error: Invalid score --> valid scores are whole integers between 0 and 100');
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
    console.error(err);
    res.status(500).send('Error: An unexpected error occured');
  });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const studentName = req.body.name;
  const studentCourse = req.body.course;
  const studentScore = Number(req.body.score);
  const gradeReplaceId = Number(req.params.gradeId);
  if (!studentName || !studentCourse || !studentScore) { // parameters are missing from the input
    res.status(400).send('Error: Be sure to include name, course, score in your request header.');
    return;
  }
  if (!Number.isInteger(studentScore) || studentScore < 0 || studentScore > 100) { // grade value is invalid in input
    res.status(400).send('Error: Invalid score --> valid scores are whole integers between 0 and 100.');
    return;
  }
  if (!gradeReplaceId || !Number.isInteger(gradeReplaceId)) { // gradeId is missing or not a number
    res.status(400).send('Error: Either you did not specify a gradeId to replace, or the gradeId is not a valid integer.');
  }
  const sql = `
  UPDATE "grades"
  SET    "name"    =  $1,
         "course"  =  $2,
         "score"   =  $3
  WHERE  "gradeId" =  $4
  RETURNING *;
  `;
  const params = [studentName, studentCourse, studentScore, gradeReplaceId];
  db.query(sql, params).then(result => {
    const editedRow = result.rows[0];
    if (!editedRow) {
      res.status(404).send(`Error: Cannot find grade with "gradeId" ${gradeReplaceId}.`);
    } else {
      res.send(editedRow);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).send('Error: An unexpected error occured');
  });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeDeleteId = Number(req.params.gradeId);
  if (!gradeDeleteId || !Number.isInteger(gradeDeleteId)) { // gradeId is missing or not a number
    res.status(400).send('Error: Either you did not specify a gradeId to delete, or the gradeId is not a valid integer.');
    return;
  }
  const sql = `
  DELETE
    FROM "grades"
   WHERE "gradeId" = $1
   RETURNING *;
  `;
  const params = [gradeDeleteId];
  db.query(sql, params).then(result => {
    const deletedRow = result.rows[0];
    if (!deletedRow) {
      res.status(404).send(`Error: Cannot find grade with "gradeId" ${gradeDeleteId}.`);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express Server listening on port 3000');
});
