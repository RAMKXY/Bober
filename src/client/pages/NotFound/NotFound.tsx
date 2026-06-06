import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function NotFound() {
  return (
    <>
      <h1 className={styles.h1}>Стоп, Денис іщи туто не зробив!</h1>
      <Link to="/">Вернути са на головну</Link>
    </>
  )
}
