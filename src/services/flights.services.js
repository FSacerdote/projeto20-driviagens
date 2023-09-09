import dayjs from "dayjs"
import { errors } from "../errors/errors.js"
import { flightRepository } from "../repositories/flights.repository.js"

async function post(origin, destination, date){
  if (origin === destination) throw errors.conflict("O destino não pode ser igual a origem")
  const originQuery = await flightRepository.searchFlight(origin)
  const destinationQuery = await flightRepository.searchFlight(destination)
  if(originQuery.rowCount === 0 || destinationQuery.rowCount === 0) throw errors.notFound(originQuery.rowCount === 0?"Origem":"Destino")
  await flightRepository.insertFlight(origin, destination, date)
}

async function get(destination, origin, biggerDate, smallerDate){
  if((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) throw errors.format("Uma data de inicio deve ser utilizada juntamente com uma data limite")
  const flightsQuery = await flightRepository.selectFlight(origin, destination)
  if(flightsQuery.rows.length === 0 && destination) throw errors.notFound("Nenhum voo com o destino escolhido")

  let flightList = flightsQuery.rows
  if(biggerDate && smallerDate){
    const smallerParts = smallerDate.split('-');
    const biggerParts = biggerDate.split('-');
    const smaller = new Date(`${smallerParts[2]}-${smallerParts[1]}-${smallerParts[0]}`);
    const bigger = new Date(`${biggerParts[2]}-${biggerParts[1]}-${biggerParts[0]}`);
    if(smaller > bigger) throw errors.badRequest()
    flightList = flightList.filter((flight)=> flight.date > smaller && flight.date < bigger)
  }
  
  let flightsFormated = flightList.map((flight)=>{
    return {
      ...flight,
      date: dayjs(flight.date).format("DD-MM-YYYY")
    }
  })

  return flightsFormated
}

export const flightsService = {post, get}