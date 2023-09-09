import { errors } from "../errors/errors.js"
import { passengerRepository } from "../repositories/passengers.respository.js"

async function post(firstName, lastName){
  await passengerRepository.insertPassenger(firstName, lastName)
}

async function get(name){
  const passengerQuery = await passengerRepository.selectPassengers(name?name:"")
  if(passengerQuery.rowCount > 10) throw errors.tooMany()
  return passengerQuery.rows
}

export const passengersService = {post, get}