import express from "express"
import "express-async-errors"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/index.routes.js"
import { errorHandler } from "./middlewares/errorHandler.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)})