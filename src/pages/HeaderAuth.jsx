import { Link, Outlet } from "react-router-dom"
function HeaderAuth () {
  return (
    <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/auth/faqs">faqs</Link>
          <Link to="/auth">Autenticación</Link>
        </nav>
        <Outlet />
        <footer>
          <p>Auth</p>
          <p>faqs</p>
          <p>Data </p>
        </footer>
    </>
  )
}

export default HeaderAuth