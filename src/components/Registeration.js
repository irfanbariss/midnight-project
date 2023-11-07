import { useState, useEffect } from 'react'
import '../styles/account.scss'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'

const Registeration = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0)
  }, [])
  const [isSignUp, setIsSignup] = useState(false)

  const toggleForm = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp)
  }

  return (
    <div className="wrapper">
      <div className="account-container">
        {isSignUp ? <SignUp /> : <SignIn />}

        <p onClick={toggleForm}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        </p>
      </div>
    </div>
  )
}
export default Registeration
