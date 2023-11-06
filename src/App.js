import EventPage from './components/EventPage'
import IEventPage from './components/IEventPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './styles/navbar.scss'
// import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registeration from './components/Registeration'
import AllEvents from './pages/AllEvents'
import IIEventPage from './components/IIEventPage'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:name" element={<EventPage />} />
          <Route path="/account" element={<Registeration />} />
          <Route path="/hot-tickets/:name" element={<IEventPage />} />
          <Route path="/all-events/:name" element={<IIEventPage />} />
          <Route path="/all-events" element={<AllEvents />} />
        </Routes>
      </Router>
      <div className="footer">
        <p>Developed by © Barış Özer. All Rights Reserved</p>
      </div>
    </>
  )
}

export default App
