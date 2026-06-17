import { fileURLToPath } from "url"
import express from "express"
import path from "path"
import database from "./database/database"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 4200

app.use(express.static(path.join(__dirname, "../../dist")))
app.use(express.json())

app.get("/*path", (_, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"))
})

app.post("/api/auth", (req, res) => {
  const name = req.headers.name
  const password = req.headers.password

  database.execute(`INSERT INTO users (name, password) VALUES (?, ?)`, [
    name as string,
    password as string,
  ])

  res.status(201)
})

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}/`)
})
