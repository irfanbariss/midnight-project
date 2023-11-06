import { useEffect } from 'react'
import Registeration from '../components/Registeration'

const Account = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0)
  }, [])
  return <Registeration />
}
export default Account
