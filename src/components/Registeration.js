import { useState, useEffect } from 'react'
import '../styles/account.scss'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import AuthDetails from './auth/AuthDetails'

const Registeration = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0)
  }, [])
  const [isSignUp, setIsSignup] = useState(false)

  const toggleForm = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp)
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)
  //   const formObject = {}
  //   formData.forEach((value, key) => {
  //     formObject[key] = value
  //   })
  //   console.log('Form Data:', formObject)
  // }
  return (
    <div className="wrapper">
      <div className="account-container">
        {isSignUp ? <SignUp /> : <SignIn />}
        {<AuthDetails />}
        <p onClick={toggleForm}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        </p>
      </div>
    </div>
  )
}
export default Registeration
