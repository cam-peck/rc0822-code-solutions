SELECT "customers"."firstName" AS "customerFirstName",
       "customers"."lastName" AS "customerLastName",
       SUM("payments"."amount") AS "totalPaid"
FROM "customers"
JOIN "payments" USING ("customerId")
GROUP BY "customers"."firstName", "customers"."lastName"
ORDER BY "totalPaid" DESC;
