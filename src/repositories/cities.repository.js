import { db } from "../database/database.connection.js";

export function insertCity(name){
  return db.query(`INSERT INTO cities (name) VALUES ($1)`, [name])
}

export function searchCity(name){
  return db.query(`SELECT * FROM cities WHERE name=$1`, [name])
}