import '../styles/thisweek.scss'
import eventsData from '../data/Events'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ThisWeek = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [filteredEvents, setFilteredEvents] = useState([])
  const handleDayClick = (day) => {
    setSelectedDay(day)
    const filtered = eventsData.filter((e) => e.date === day)
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
          <Link to={`/this-week/${image.name}`}>
            <div className="image-container">
              <img src={image.url} alt={image.name} />
            </div>
          </Link>
          <div className="event-info">
            <p>{image.name}</p>
            <p className="dates">
              {image.date}
              <br />
              {image.hours}
            </p>
          </div>
        </div>

        <hr className="ticket-dash" />
        <div className="buy">Add to Cart</div>
      </div>
    ))
  }
  return (
    <>
      <div className="container">
        <div className="days">
          <h1>This Week</h1>
          <ul>
            <li
              className={selectedDay === null ? 'active' : ''}
              onClick={() => handleAllClick()}
            >
              All
            </li>
            <li
              className={selectedDay === 'monday' ? 'active' : ''}
              onClick={() => handleDayClick('monday')}
            >
              Monday
            </li>
            <li
              className={selectedDay === 'tuesday' ? 'active' : ''}
              onClick={() => handleDayClick('tuesday')}
            >
              Tuesday
            </li>
            <li
              className={selectedDay === 'wednesday' ? 'active' : ''}
              onClick={() => handleDayClick('wednesday')}
            >
              Wednesday
            </li>
            <li
              className={selectedDay === 'thursday' ? 'active' : ''}
              onClick={() => handleDayClick('thursday')}
            >
              Thursday
            </li>
            <li
              className={selectedDay === 'friday' ? 'active' : ''}
              onClick={() => handleDayClick('friday')}
            >
              Friday
            </li>
            <li
              className={selectedDay === 'saturday' ? 'active' : ''}
              onClick={() => handleDayClick('saturday')}
            >
              Saturday
            </li>
            <li
              className={selectedDay === 'sunday' ? 'active' : ''}
              onClick={() => handleDayClick('sunday')}
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
    </>
  )
}
export default ThisWeek
export { eventsData }
