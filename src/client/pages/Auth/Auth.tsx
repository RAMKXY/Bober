import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"
import Error from "../../UI/Error/Error"
import { Link } from "react-router-dom"
import { ChangeEvent, useState} from "react"
import styles from "./Auth.module.css"
import "../../App.css"

// TODO: Відредагувати код
export default function Auth() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target?.value)
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target?.value)
  }

  function checkUserData() {
    // ! ГОВНОКОД !
    if (name.length === 0) {
      return setError("Будьласка, введіть ім'я")
    }
    if (name.length <= 2) {
      return setError("Ім'я повинно бути довшим за 2 символи")
    }
    if (name.length > 20) {
      return setError("Ім'я повинно бути коротшим за 20 символів")
    }

    if (password.length === 0) {
      return setError("Будьласка, введіть пароль")
    }
    if (password.length > 40) {
      return setError("Пароль повинен бути коротшим за 40 символів")
    }
    if (password.length < 8) {
      return setError("Пароль повинен бути більший за 8 символів")
    }
    // ! ГОВНОКОД !
  
    return setError("")
  }

  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.h1}>Bober</h1>

        <p>Ім'я</p>
        <Input onChange={handleChangeName}>
          Введіть ім'я
        </Input>

        <p>Пароль</p>
        <Input onChange={handleChangePassword} type="password">
          Введіть пароль
        </Input>

        <div className={styles.link}>
          <Link to={"/login"}>Маєте акаунт?</Link>
        </div>

        <Button onClick={checkUserData}>Зареєструватися</Button>

        {error.length !== 0 && <Error>{error}</Error>}
      </div>
      
    </>
  )
}
