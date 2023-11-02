import Account from './components/Account'
import EventPage from './components/EventPage'
import IEventPage from './components/IEventPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './styles/navbar.scss'
// import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/this-week/:name" element={<IEventPage />} />
        <Route path="/event/:name" element={<EventPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App
