import '../styles/upcoming.scss'
import upcomingData from '../data/UpEvents'

const Upcoming = () => {
  const upcomingEvents = upcomingData.map((image) => (
    <div className="card-container" key={image.name}>
      <div className="card">
        <img src={image.url} alt={image.name} />
        <div className="event-info">
          <p>{image.name}</p>
          <p className="dates">
            {image.date}
            <br />
            {image.hours}
          </p>
        </div>
      </div>
    </div>
  ))
  return (
    <>
      <div className="upcoming-events-container">
        <h1>Upcoming</h1>
        <div className="upcoming-events">{upcomingEvents}</div>
      </div>
      <hr className="line-break" />
    </>
  )
}
export default Upcoming
