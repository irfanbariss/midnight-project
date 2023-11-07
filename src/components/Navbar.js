import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../styles/navbar.scss'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import cart from '../assets/cart.png'

const Navbar = ({ cartSize }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [authUser, setAuthUser] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/')
        setAuthUser(user)

        console.log(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Successfully signed out')
      })
      .catch((e) => console.log(e))
  }

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
          {authUser ? (
            <>
              <NavLink to="/cart" className="cart account-link">
                <img src={cart} alt="" width={'30px'} height={'25px'} />
                {cartSize > 0 && (
                  <span className="cart-amount">{cartSize}</span>
                )}
              </NavLink>
              <NavLink onClick={userSignOut} className={'account-link'}>
                Sign Out
              </NavLink>

              {/* <NavLink to="/account" className="account-link">
                Account
              </NavLink> */}
            </>
          ) : (
            <NavLink to="/account" className="account-link">
              Account
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
