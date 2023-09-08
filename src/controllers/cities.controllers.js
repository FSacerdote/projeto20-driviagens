import httpStatus from "http-status"
import { citiesService } from "../services/cities.services.js"

export async function postCity(req, res){
  const {name} = req.body
  await citiesService.post(name)
  res.sendStatus(httpStatus.CREATED)
}