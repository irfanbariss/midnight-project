import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.scss'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav>
      <Link to="/" className="title">
        Midnight
      </Link>
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/all-events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/account" className="account-link">
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
