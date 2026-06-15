import Home from "./pages/Home/Home"
import { Navigate } from "react-router-dom"

export default function App() {
  const isAuth = false // Тестова змінна

  return isAuth ? <Home /> : <Navigate to={"/auth"} replace /> // TODO: Виправити навігацію
}
