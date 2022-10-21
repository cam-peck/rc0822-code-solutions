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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express Server listening on port 3000');
});
