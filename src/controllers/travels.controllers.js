import httpStatus from "http-status"
import { travelsServices } from "../services/travels.services.js"

export async function postTravel (req, res){
  const {passengerId, flightId} = req.body
  await travelsServices.post(passengerId, flightId)
  res.sendStatus(httpStatus.CREATED)
}