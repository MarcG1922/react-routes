import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Error from "../pages/Error"
import Header from "../pages/Header"
import HeaderAuth from "../pages/HeaderAuth"
import Auth from "../pages/Auth"
import Faqs from "../pages/Faqs"

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Header />,
    children: [
      {path: "/", element: <Home />},
      {path: "/projects", element: <Projects />},
      {path: "/resume", element: <Resume />}
    ]
  },
  {
    path: '/auth',
    element: <HeaderAuth />,
    children: [
      {path: "/auth", element: <Auth />},
      {path: "faqs", element: <Faqs />},
    ]
  },
])

export default router