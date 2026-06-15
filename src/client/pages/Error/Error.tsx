import { Link } from "react-router-dom"
import styles from "./Error.module.css"

export default function Error() {
  return (
    <>
      <h1 className={styles.h1}>Виникла помилка</h1>
      <h2>Зуб даву, же я щи туто просто не зробив</h2>
      <h2>Не біда!</h2>
      <Link to="/">Вернути са на головну</Link>
    </>
  )
}
