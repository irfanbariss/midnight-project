import { useState } from 'react'
import allEvents from '../data/AllEventsData'
import { Link } from 'react-router-dom'

const AllEvents = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const renderAllEvents = (eventList) => {
    const filteredEvents = eventList.filter((event) => {
      const { name, date, venue, day } = event
      const lowerCaseSearchTerm = searchTerm.toLowerCase()

      return (
        name.toLowerCase().includes(lowerCaseSearchTerm) ||
        date.toLowerCase().includes(lowerCaseSearchTerm) ||
        venue.toLowerCase().includes(lowerCaseSearchTerm) ||
        day.toLowerCase().includes(lowerCaseSearchTerm)
      )
    })
    if (filteredEvents.length === 0) {
      return <div className="no-events">No events</div>
    }

    return filteredEvents.map((image) => (
      <div className="card-container" key={image.name}>
        <div className="card">
          <Link to={`/all-events/${image.name}`}>
            <div className="image-container">
              <img src={image.url} alt={image.name} />
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
        <Link to={`/all-events/${image.name}`} className="buy">
          Add to Cart
        </Link>
      </div>
    ))
  }
  return (
    <div className="page-cont">
      <h1 className="title">All Events</h1>
      <div className="search-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by artist, date or venue..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        <div className="all events-container">{renderAllEvents(allEvents)}</div>
      </div>
    </div>
  )
}
export default AllEvents
