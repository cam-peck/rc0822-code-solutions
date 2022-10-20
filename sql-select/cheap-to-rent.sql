SELECT "filmId",
       "title"
FROM "films"
WHERE "rentalRate" < '1.00'
LIMIT 50;
