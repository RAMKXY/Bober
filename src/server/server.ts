import { fileURLToPath } from "url"
import { createUser } from "./database/sqlCommands/createUser"
import express from "express"
import path from "path"
import database from "./database/database"
import dotenv from "dotenv"
import logger from "./utils/log"

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathToStatic = "../../dist"

const protocol = "http"
const host = "localhost"
const port = process.env.PORT

enum APIroute {
  all = "/*path",
  auth = "/api/routes",
}

enum HTTPstatus {
  success = 200,
  successCreate = 201,
  clientError = 400,
  unauthorized = 401,
  serverError = 500,
}

app.use(express.static(path.join(__dirname, pathToStatic)))
app.use(express.json())

app.get(APIroute.all, (_, res) => {
  res.sendFile(path.join(__dirname, pathToStatic, "index.html"))
})

app.post(APIroute.auth, async (req, res) => {
  const name = req.headers.name as string
  const password = req.headers.password as string

  // prettier-ignore
  try {
    await database.execute(createUser(), [name, password])
  } 
  catch (error) {
    logger.log({ level: "info", message: error as string })
    res.status(HTTPstatus.serverError).json({ message: `Internal server error` })
  }

  res.status(HTTPstatus.successCreate).json({ message: "Success create" })
})

app.listen(port, () => {
  console.log(`App listening on ${protocol}://${host}:${port}/`)
})
