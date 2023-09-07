import { db } from "../database/database.connection.js";

export function searchPassenger(id){
  return db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
}

export function searchFlight(id){
  return db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
}

export function insertTravel(passengerId, flightId){
  return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId])
}