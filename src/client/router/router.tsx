import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import { createBrowserRouter } from "react-router-dom"

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/error",
    element: <NotFound />,
  },
])
