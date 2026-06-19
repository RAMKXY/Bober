import dotenv from "dotenv"
import mysql2 from "mysql2/promise"
import logger from "../utils/log"

dotenv.config()

const database = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

// prettier-ignore
try {
  await database.getConnection()
} 
catch (error) {
  if (typeof error === "string") {
    logger.log({ level: "error", message: error })
  }
}

export default database
