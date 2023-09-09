import { errors } from "../errors/errors.js"
import { travelsRepository } from "../repositories/travels.repository.js"

async function post (passengerId, flightId){
  const passengerQuery = await travelsRepository.searchPassenger(passengerId)
  const flightQuery = await travelsRepository.searchFlight(flightId)
  if(passengerQuery.rowCount === 0 || flightQuery.rowCount === 0) throw errors.notFound(passengerQuery.rowCount === 0?"Passageiro":"Vôo")
  await travelsRepository.insertTravel(passengerId, flightId)
}

export const travelsServices = {post}