import { fileURLToPath } from "url"
import express from "express"
import path from "path"
//import database from "./database/database"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 4200

app.use(express.static(path.join(__dirname, "../../dist")))

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}/`)
})
