import { insertPassenger } from "../repositories/passengers.respository.js"

export async function postPassenger(req, res){
  const {firstName, lastName} = req.body
  try {
    await insertPassenger(firstName, lastName)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}