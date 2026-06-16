import NavBar from "../../UI/NavBar/NavBar"
import CountButton from "../../UI/CountButton/CountButton"
import CountBar from "../../UI/CountBar/CountBar"
import { useState } from "react"
import "../../App.css"

export default function Home() {
  const [count, setCount] = useState(0)

  function onHandleClick() {
    return setCount(count + 1)
  }

  return (
    <>
      <h1>$ {count}</h1>
      <CountBar count={count} maxCount={1000} />
      <CountButton onClick={onHandleClick}>Тапай</CountButton>
      <NavBar />

      {count === 67 && <h1>Мене заманав тот СіксСевен</h1>}
      {count === 69 && <h1>І 69 тоже :)</h1>}
    </>
  )
}
