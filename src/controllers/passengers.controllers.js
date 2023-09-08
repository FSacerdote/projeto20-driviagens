import { insertPassenger, selectPassengers } from "../repositories/passengers.respository.js"

export async function postPassenger(req, res){
  const {firstName, lastName} = req.body
  try {
    await insertPassenger(firstName, lastName)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function getPassengersTravels(req, res){
  const {name} = req.query
  try {
    const passengerQuery = await selectPassengers(name?name:"");
    if(passengerQuery.rowCount > 10) return res.status(500).send("Too many requests")
    res.send(passengerQuery.rows)
  } catch (error) {
    res.status(500).send(error.message)
  }
}