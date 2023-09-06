import { Router } from "express"
import citiesRouter from "./cities.routes.js"
import flightsRouter from "./flights.routes.js"
import passengersRouter from "./passengers.routes.js"
import travelsRouter from "./travels.routes.js"

const router = Router()
router.use(citiesRouter)
router.use(flightsRouter)
router.use(passengersRouter)
router.use(travelsRouter)

export default router