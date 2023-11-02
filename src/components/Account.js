import { useState } from 'react'
import '../styles/account.scss'

const SignUp = () => {
  return (
    <div className="form-container">
      <input type="text" name="name" id="name" placeholder="Name" required />
      <input type="eail" name="email" id="email" placeholder="Email" required />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="Confirm Password"
        minLength={6}
        required
      />
    </div>
  )
}

const SignIn = () => {
  return (
    <div className="form-container">
      <input type="eail" name="email" id="email" placeholder="Email" required />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
      />
    </div>
  )
}

const Account = () => {
  const [isSignUp, setIsSignup] = useState(false)

  const toggleForm = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    })
    console.log('Form Data:', formObject)
  }
  return (
    <div className="wrapper">
      <div className="account-container">
        <h2>{isSignUp ? 'Sign up' : 'Sign in'}</h2>
        <form action="submit" onSubmit={handleSubmit}>
          {isSignUp ? <SignUp /> : <SignIn />}
          <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          <p onClick={toggleForm}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </p>
        </form>
      </div>
    </div>
  )
}
export default Account
