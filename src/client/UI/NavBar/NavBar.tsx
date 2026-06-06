import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <>
      <nav>
        <Link className={styles.link} to={"/"}>
          Домашня сторінка
        </Link>

        <Link className={styles.link} to={"/error"}>
          Друзя
        </Link>

        <Link className={styles.link} to={"/error"}>
          Налаштування
        </Link>
      </nav>
    </>
  )
}
