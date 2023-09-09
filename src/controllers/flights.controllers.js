import { flightsService } from "../services/flights.services.js"
import httpStatus from "http-status"

export async function postFlight(req, res){
  const {origin, destination, date} = req.body
  await flightsService.post(origin, destination, date)
  res.sendStatus(httpStatus.CREATED)
}

export async function getFlights(req, res){
  const {destination, origin} = req.query
  const biggerDate = req.query["bigger-date"]
  const smallerDate = req.query["smaller-date"]
  const flights = await flightsService.get(destination, origin, biggerDate, smallerDate)
  res.send(flights)
}