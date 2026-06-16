import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function NotFound() {
  return (
    <>
      <h1 className={styles.h1}>404</h1>
      <h2>Зуб даву, же я щи туто просто не зробив</h2>
      <Link to="/">Вернути са на головну</Link>
    </>
  )
}
