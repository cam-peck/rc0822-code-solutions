SELECT "c"."firstName",
       "c"."lastName",
       "f"."title"
FROM "customers" AS "c"
JOIN "rentals" AS "r" USING ("customerId")
JOIN "inventory" AS "i" USING ("inventoryId")
JOIN "films" AS "f" USING ("filmId")
WHERE "f"."title" = 'Magic Mallrats';
