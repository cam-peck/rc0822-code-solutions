const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTableAsync',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', async (req, res, next) => {
  const sql = `
  SELECT *
    FROM "grades";
  `;
  try {
    const result = await db.query(sql);
    res.json(result.rows);
  }
  catch (err) {
    console.log(err.stack)
    res.status(500).json('An unexpected error occured.')
  }
});

app.listen(3000, () => {
  console.log('listening on Port 3000');
});
