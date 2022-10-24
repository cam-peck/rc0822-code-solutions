/* calculate the cost of each film */
WITH cost_table AS (
  SELECT "title",
  SUM("replacementCost") AS "totalBuyPrice"
  FROM "films"
  JOIN "inventory" USING ("filmId")
  GROUP BY "title"
  ORDER BY "totalBuyPrice" DESC
)

/* calculate the revenue of each film & get total profit*/
SELECT "films"."title",
       "films"."description",
       (SUM("payments"."amount") - cost_table."totalBuyPrice") AS "totalProfit"
FROM "payments"
JOIN "rentals" USING ("rentalId")
JOIN "inventory" USING ("inventoryId")
JOIN "films" USING ("filmId")
JOIN cost_table USING ("title")
GROUP BY "films"."filmId", cost_table."totalBuyPrice"
ORDER BY "totalProfit" DESC
LIMIT 5;
