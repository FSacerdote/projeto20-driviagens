import { insertCity, searchCity } from "../repositories/cities.repository.js"

export async function postCity(req, res){
  const {name} = req.body
  try {
    const cityQuery = await searchCity(name)
    if(cityQuery.rowCount !== 0) return res.sendStatus(409)
    await insertCity(name)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}