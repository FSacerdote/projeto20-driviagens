import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.js"
import { flightSchema, querySchema } from "../schemas/flights.schemas.js"
import { getFlights, postFlight } from "../controllers/flights.controllers.js"
import validateQuery from "../middlewares/validateQuery.js"
import dayjs from "dayjs"

const flightsRouter = Router()

flightsRouter.post("/flights", validateSchema(flightSchema), postFlight)
flightsRouter.get("/flights", validateQuery(querySchema), getFlights)

export default flightsRouter