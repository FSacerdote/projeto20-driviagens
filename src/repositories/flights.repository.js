import { db } from "../database/database.connection.js";

export function searchFlight(id){
 return db.query(`SELECT * FROM cities WHERE id=$1;`, [id])
}

export function insertFlight(origin, destination, date){
  return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date])
}