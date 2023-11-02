import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Midnight</h1>
      <div className="nav-sections">
        <NavLink to="/" className="nav-btn">
          Home
        </NavLink>
        <NavLink to="/all-events" className="nav-btn">
          All Events
        </NavLink>
      </div>
      <Link to="/account" className="account">
        Account
      </Link>
    </div>
  )
}
export default Navbar
