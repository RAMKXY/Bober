import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"
import styles from "./Auth.module.css"
import { Link } from "react-router-dom"

export default function Auth() {
  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.h1}>Bober</h1>

        <p>Ім'я</p>
        <Input>Введіть ім'я</Input>

        <p>Пароль</p>
        <Input type="password">Введіть пароль</Input>
        <br />
        <br />
        <Link to={"/login"}>Маєте акаунт?</Link>
        <br />
        <br />

        <Button>Зареєструватися</Button>
      </div>
    </>
  )
}
