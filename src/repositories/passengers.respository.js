import { db } from "../database/database.connection.js";

function insertPassenger(firstName, lastName){{
  return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName])
}}

function selectPassengers(name){
  return db.query(`
    SELECT (p."firstName" || ' ' || p."lastName") AS passenger, COUNT(t.id) AS travels 
    FROM passengers p 
    LEFT JOIN travels t ON p.id = t."passengerId" 
    WHERE (p."firstName" || ' ' || p."lastName") ILIKE '%' || $1 || '%'
    GROUP BY p.id
    ORDER BY travels DESC
    LIMIT 10;
  `, [name])
}

export const passengerRepository = {insertPassenger, selectPassengers}