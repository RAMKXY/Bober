import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.link} to={"/"}>
          Головна
        </Link>

        <Link className={styles.link} to={"/friends"}>
          Друзі
        </Link>

        <Link className={styles.link} to={"/settings"}>
          Налаштування
        </Link>
      </nav>
    </>
  )
}
