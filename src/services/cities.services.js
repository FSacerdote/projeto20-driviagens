import { errors } from "../errors/errors.js"
import { citiesRespository } from "../repositories/cities.repository.js"

async function post(name){
  const cityQuery = await citiesRespository.searchCity(name)
  if(cityQuery.rowCount !== 0) throw errors.conflict(`A cidade ${name} já existe`)
  await citiesRespository.insertCity(name)
}

export const citiesService = {post}