import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useState } from 'react'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [passwordMatchError, setPasswordMatchError] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setPasswordMatchError(true)
      setTimeout(() => {
        setPasswordMatchError(false)
      }, 4000)
      return
    } else {
      setPasswordMatchError(false)
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {passwordMatchError && (
        <div className="error-message">Passwords do not match</div>
      )}
      <form action="submit" onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="eail"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
