import { db } from "../database/database.connection.js";

function searchPassenger(id){
  return db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
}

function searchFlight(id){
  return db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
}

function insertTravel(passengerId, flightId){
  return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId])
}

export const travelsRepository = {searchPassenger, searchFlight, insertTravel}