import Error from "../pages/Error/Error"
import Auth from "../pages/Auth/Auth"
import App from "../App"
import { createBrowserRouter } from "react-router-dom"

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Error />,
  },
])
