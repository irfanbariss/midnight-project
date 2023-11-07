import { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInError, setSignInError] = useState(null)
  const handleSignIn = (e) => {
    e.preventDefault()
    setSignInError(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        setSignInError('Wrong email address or password', error)
        setTimeout(() => {
          setSignInError(null)
        }, 4000)
      })
  }
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      {signInError && <div className="error-message">{signInError}</div>}
      <form action="submit" onSubmit={handleSignIn}>
        <input
          type="email"
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
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
