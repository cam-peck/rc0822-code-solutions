SELECT "a"."line1" AS "address",
       "ci"."name" AS "city",
       "a"."district",
       "co"."name" AS "country"
FROM "addresses" AS "a"
JOIN "cities" AS "ci" USING ("cityId")
JOIN "countries" AS "co" USING ("countryId");
