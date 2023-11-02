import { useParams } from 'react-router-dom'
import imgData from '../Data'
import '../styles/eventpage.scss'
import { useState, useEffect } from 'react'

const EventPage = () => {
  const { name } = useParams()
  const eventData = imgData.find((event) => event.name === name)
  const [stdCount, setStdCount] = useState(0)
  const [bckCount, setBckCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const stdPrice = 30
  const bckPrice = 60
  useEffect(() => {
    // Miktarlar değiştiğinde fiyatları güncelle
    const total = stdCount * stdPrice + bckCount * bckPrice
    setTotalPrice(total)
  }, [stdCount, bckCount])

  const increaseStdCount = () => {
    setStdCount(stdCount + 1)
  }
  const decreaseStdCount = () => {
    if (stdCount > 0) {
      setStdCount(stdCount - 1)
    }
  }
  const increaseBckCount = () => {
    setBckCount(bckCount + 1)
  }
  const decreaseBckCount = () => {
    if (bckCount > 0) {
      setBckCount(bckCount - 1)
    }
  }

  if (!eventData) {
    return <div>Event not found</div>
  }
  return (
    <div className="event-container">
      <div className="single-event-container">
        <div className="single-event">
          <h1 className="event-title">{eventData.name}</h1>
          <div className="event-content">
            <div className="event-image">
              <img src={eventData.url} alt={eventData.name} />
            </div>
            <div className="event-details">
              <div className="about-event">
                <h3>About</h3>
                {eventData.about}
                <div className="rules">
                  <h3>Rules</h3>
                  <p>
                    Event has an age limit of 18 <br />
                    For disabled enquiries please call Volkswagen Arena
                    (+902123776700). <br />
                    Sound in the venue may cause temporary hearing problems.{' '}
                    <br />
                    Lighting in the venue may cause temporary eye discomfort.
                    <br />
                    All audience must have their tickets with them during the
                    event.
                    <br /> Audience that exits the venue will need to purchase a
                    new ticket in order to enter the venue again.
                    <br /> Event tickets should only be purchased from official
                    selling points determined by the promoter. <br />
                    The promoter has a right to not allow the ticket holder if
                    the ticket is not purchased from an official selling point.{' '}
                    <br />
                    The venue has a right to not allow any person if they seem
                    unsuitable for the event, audience who are not allowed will
                    receive a refund. <br /> No food or drinks are allowed in
                    the venue. -If there is a tobacco sponsor- Open cigarette
                    packs and tobacco will not be allowed in the venue.
                  </p>
                </div>
                {/* Etkinlik hakkında bilgileri buraya ekleyin */}
              </div>
            </div>
          </div>
        </div>
        <div className="add-to-cart">
          <div className="standard-options">
            <h3>Standard</h3>
            <p className="price">{stdPrice}$</p>
            <div className="buttons">
              <button className="btn decrease" onClick={decreaseStdCount}>
                -
              </button>
              <span className="standard-price">{stdCount}</span>
              <button className="btn increase" onClick={increaseStdCount}>
                +
              </button>
            </div>
          </div>
          <div className="backstage-options">
            <h3>Backstage</h3>
            <p className="price">{bckPrice}$</p>
            <div className="buttons">
              <button className="btn decrease" onClick={decreaseBckCount}>
                -
              </button>
              <span className="backstage-price">{bckCount}</span>
              <button className="btn increase" onClick={increaseBckCount}>
                +
              </button>
            </div>
            <div className="total">Total: {totalPrice}$</div>
          </div>
          <button className="buy-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default EventPage
