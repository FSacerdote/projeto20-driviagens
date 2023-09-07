import { insertFlight, searchFlight } from "../repositories/flights.repository.js"

export async function postFlight(req, res){
  const {origin, destination, date} = req.body
  if (origin === destination) return res.sendStatus(409)
  try {
    const originQuery = await searchFlight(origin)
    const destinationQuery = await searchFlight(destination)
    if(originQuery.rowCount === 0 || destinationQuery.rowCount === 0) return res.sendStatus(404)
    await insertFlight(origin, destination, date)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}