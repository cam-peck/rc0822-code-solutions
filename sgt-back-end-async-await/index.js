const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTableAsync',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', async (req, res) => {
  const sql = `
  SELECT *
    FROM "grades";
  `;
  try {
    const result = await db.query(sql);
    res.json(result.rows);
  }
  catch (err) {
    console.log(err.stack);
    res.status(500).json('An unexpected error occured.');
  }
});

app.post('/api/grades', async (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({
      Error: 'Name, course, and score are required fields.'
    });
    return;
  }
  if (typeof score !== 'number' || score < 0) {
    res.status(400).json({
      Error: 'Score must be a positive integer.'
    });
    return;
  }
  const sql =  `
  INSERT INTO "grades" ("name", "course", "score")
       VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const params = [name, course, score];
  try {
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  }
  catch (err) {
    console.log(err.stack);
    res.status(500).json('An unexpected error occured.')
  }
})

app.put('/api/grades/:gradeId', async (req, res) => {
  const { gradeId } = req.params;
  const { name, course, score } = req.body;
  if (!gradeId || isNaN(Number(gradeId)) || gradeId < 0) {
    res.status(400).json({
      Error: 'gradeId is a required parameter and must be a positive number.'
    });
    return;
  };
  if (!name || !course || !score) {
    res.status(400).json({
      Error: 'Name, course, and score are required fields.'
    });
    return;
  };
  if (typeof score !== 'number' || score < 0) {
    res.status(400).json({
      Error: 'Score must be a positive integer.'
    });
    return;
  };
  const sql = `
    UPDATE "grades"
       SET "score" = $1, "name" = $2, "course" = $3
     WHERE "gradeId" = $4
 RETURNING *;
  `;
  const params = [score, name, course, gradeId]
  try {
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      res.status(404).json({
        Error: `Grade with id:${gradeId} not found.`
      });
      return;
    }
    res.json(result.rows[0]);
  }
  catch (err) {
    console.stack(err);
    res.status(500).send('An unexpected error occured');
  }
})

app.delete('/api/grades/:gradeId', async (req, res) => {
  const { gradeId } = req.params;
  if (!gradeId || isNaN(Number(gradeId)) || gradeId < 0) {
    res.status(400).json({
      Error: 'gradeId is a required parameter and must be a positive number.'
    });
    return;
  };
  const sql = `
    DELETE
      FROM "grades"
     WHERE "gradeId" = $1
 RETURNING *;
  `;
  const params = [gradeId];
  try {
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      res.status(404).json({
        Error: `Grade with id:${gradeId} not found.`
      });
      return;
    };
    res.status(204).json({
      Message: `Entry with id:${gradeId} deleted successfully.`
    });
  }
  catch (err) {
    console.stack(err);
    res.status(500).send('An unexpected error occured');
  }
})

app.listen(3000, () => {
  console.log('listening on Port 3000');
});
