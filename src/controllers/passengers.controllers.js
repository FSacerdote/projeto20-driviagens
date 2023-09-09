import httpStatus from "http-status"
import { passengersService } from "../services/passengers.services.js"

export async function postPassenger(req, res){
  const {firstName, lastName} = req.body
  await passengersService.post(firstName, lastName)
  res.sendStatus(httpStatus.CREATED)
}

export async function getPassengersTravels(req, res){
  const {name} = req.query
  const passengers = await passengersService.get(name)
  res.send(passengers)
}