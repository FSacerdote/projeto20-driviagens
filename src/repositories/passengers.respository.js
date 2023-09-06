import { db } from "../database/database.connection.js";


export async function  insertPassenger(firstName, lastName){{
  return db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName])
}}