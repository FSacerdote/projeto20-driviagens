import { db } from "../database/database.connection.js";

function searchFlight(id){
 return db.query(`SELECT * FROM cities WHERE id=$1;`, [id])
}

function insertFlight(origin, destination, date){
  return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'));`, [origin, destination, date])
}

function selectFlight(origin, destination){
  if (origin && destination) {
    return db.query(`
      SELECT f.id, c.name AS origin, c2.name AS destination, f.date FROM flights f 
      JOIN cities c ON f.origin = c.id 
      JOIN cities c2 ON f.destination = c2.id
      WHERE c.name=$1 AND c2.name=$2
      ORDER BY f.date;
      `, [origin, destination])
  }
  if (origin && !destination) {
    return db.query(`
      SELECT f.id, c.name AS origin, c2.name AS destination, f.date FROM flights f 
      JOIN cities c ON f.origin = c.id 
      JOIN cities c2 ON f.destination = c2.id
      WHERE c.name=$1
      ORDER BY f.date;
      `, [origin])
  }
  if (!origin && destination) {
    return db.query(`
      SELECT f.id, c.name AS origin, c2.name AS destination, f.date FROM flights f 
      JOIN cities c ON f.origin = c.id 
      JOIN cities c2 ON f.destination = c2.id
      WHERE c2.name=$1
      ORDER BY f.date;
      `, [destination])
  }
  return db.query(`
    SELECT f.id, c.name AS origin, c2.name AS destination, f.date FROM flights f 
    JOIN cities c ON f.origin = c.id 
    JOIN cities c2 ON f.destination = c2.id
    ORDER BY f.date;
    `)
}

export const flightRepository = { searchFlight, insertFlight, selectFlight}