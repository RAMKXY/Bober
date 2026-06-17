import NotFound from "../pages/NotFound/NotFound"
import Auth from "../pages/Auth/Auth"
import Home from "../pages/Home/Home"
import { Navigate } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

const isAuth = true // Тестова змінна

export default createBrowserRouter([
  {
    path: "/",
    element: isAuth ? <Home /> : <Navigate to="/auth" replace />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
