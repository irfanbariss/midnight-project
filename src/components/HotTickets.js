import '../styles/thisweek.scss'
import eventsData from '../data/Events'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const HotTickets = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [filteredEvents, setFilteredEvents] = useState([])

  const handleDayClick = (day) => {
    setSelectedDay(day)
    const filtered = eventsData.filter((e) => e.day === day)
    setFilteredEvents(filtered)
  }
  const handleAllClick = () => {
    setSelectedDay(null)
    setFilteredEvents([])
  }
  const renderEventCards = (eventList) => {
    return eventList.map((image) => (
      <div className="card-container" key={image.name}>
        <div className="card">
          <Link to={`/hot-tickets/${image.name}`}>
            <div className="image-container">
              <img src={image.url} alt={image.name} loading="lazy" />
            </div>
          </Link>
          <div className="event-info">
            <p>{image.name}</p>
            <p className="dates">
              {image.date}
              {image.day}
              <br />
              {image.hours}
            </p>
          </div>
        </div>

        <hr className="ticket-dash" />
        <Link to={`/hot-tickets/${image.name}`} className="buy">
          Add to Cart
        </Link>
      </div>
    ))
  }
  return (
    <div className="page-cont">
      <div className="container">
        <div className="days">
          <h1>Hot Tickets</h1>
          <ul>
            <li
              className={selectedDay === null ? 'active' : ''}
              onClick={() => handleAllClick()}
            >
              All
            </li>
            <li
              className={selectedDay === 'Monday' ? 'active' : ''}
              onClick={() => handleDayClick('Monday')}
            >
              Monday
            </li>
            <li
              className={selectedDay === 'Tuesday' ? 'active' : ''}
              onClick={() => handleDayClick('Tuesday')}
            >
              Tuesday
            </li>
            <li
              className={selectedDay === 'Wednesday' ? 'active' : ''}
              onClick={() => handleDayClick('Wednesday')}
            >
              Wednesday
            </li>
            <li
              className={selectedDay === 'Thursday' ? 'active' : ''}
              onClick={() => handleDayClick('Thursday')}
            >
              Thursday
            </li>
            <li
              className={selectedDay === 'Friday' ? 'active' : ''}
              onClick={() => handleDayClick('Friday')}
            >
              Friday
            </li>
            <li
              className={selectedDay === 'Saturday' ? 'active' : ''}
              onClick={() => handleDayClick('Saturday')}
            >
              Saturday
            </li>
            <li
              className={selectedDay === 'Sunday' ? 'active' : ''}
              onClick={() => handleDayClick('Sunday')}
            >
              Sunday
            </li>
          </ul>
        </div>
      </div>
      <div className="events-container">
        {selectedDay ? (
          filteredEvents.length > 0 ? (
            renderEventCards(filteredEvents)
          ) : (
            <p className="no-events">No events</p>
          )
        ) : (
          // Tüm etkinlik kartları
          renderEventCards(eventsData)
        )}
      </div>
      <hr className="line-break" />
    </div>
  )
}
export default HotTickets
export { eventsData }
