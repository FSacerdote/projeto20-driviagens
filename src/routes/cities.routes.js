import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.js"
import { citySchema } from "../schemas/cities.shemas.js"
import { postCity } from "../controllers/cities.controllers.js"

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citySchema), postCity)

export default citiesRouter