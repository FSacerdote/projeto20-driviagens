import dayjs from "dayjs"
import { insertFlight, searchFlight, selectFlight } from "../repositories/flights.repository.js"

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

export async function getFlights(req, res){
  const {destination, origin} = req.query
  const biggerDate = req.query["bigger-date"]
  const smallerDate = req.query["smaller-date"]
  if((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) return res.sendStatus(422)
  try {
    let flightsQuery = await selectFlight(origin, destination);
    if(biggerDate && smallerDate){
      const smallerParts = smallerDate.split('-');
      const biggerParts = biggerDate.split('-');
      const smaller = new Date(`${smallerParts[2]}-${smallerParts[1]}-${smallerParts[0]}`);
      const bigger = new Date(`${biggerParts[2]}-${biggerParts[1]}-${biggerParts[0]}`);
      if(smaller > bigger) return res.sendStatus(400)
      flightsQuery = flightsQuery.rows.filter((flight)=> flight.date > smaller && flight.date < bigger)
    }
    let flightsFormated = flightsQuery.map((flight)=>{
      return {
        ...flight,
        date: dayjs(flight.date).format("DD-MM-YYYY")
      }
    })
    if(flightsFormated.length === 0 && destination) return res.sendStatus(404)
    res.send(flightsFormated)
  } catch (error) {
    res.status(500).send(error.message)
  }
}