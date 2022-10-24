SELECT "countries"."name",
       COUNT(*) AS "totalCities"
FROM "countries"
JOIN "cities" USING ("countryId")
GROUP BY "countryId";
