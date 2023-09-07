import { insertTravel, searchFlight, searchPassenger } from "../repositories/travels.repository.js"

export async function postTravel (req, res){
  const {passengerId, flightId} = req.body
  try {
    const passengerQuery = await searchPassenger(passengerId)
    const flightQuery = await searchFlight(flightId)
    if(passengerQuery.rowCount === 0 || flightQuery.rowCount === 0) return res.sendStatus(404)
    await insertTravel(passengerId, flightId)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}