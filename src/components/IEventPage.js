import { useParams } from 'react-router-dom'
import { eventsData } from './HotTickets'
import { useEffect, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'

import '../styles/eventpage.scss'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const IEventPage = ({ addProductToCart }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)

        console.log(user)
      } else {
        setUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const { name } = useParams()
  const eventData = eventsData.find((event) => event.name === name)
  const [stdCount, setStdCount] = useState(0)
  const [bckCount, setBckCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState('Choose a ticket')

  const handleOptChange = (e) => {
    setSelectedOpt(e.target.value)
  }

  const stdPrice = 30
  const bckPrice = 60
  useEffect(() => {
    const total = stdCount * stdPrice + bckCount * bckPrice
    setTotalPrice(total)
  }, [stdCount, bckCount])

  const increaseStdCount = () => {
    // if (selectedOpt === 'Standard 30$') {
    setStdCount(stdCount + 1)
    // }
    // setBckCount(pre => pre + 1)
  }
  const decreaseStdCount = () => {
    if (stdCount > 0) {
      setStdCount(stdCount - 1)
    }
  }
  const increaseBckCount = () => {
    // if (selectedOpt === 'Backstage 60$') {
    setBckCount(bckCount + 1)
    // }
  }
  const decreaseBckCount = () => {
    if (bckCount > 0) {
      setBckCount(bckCount - 1)
    }
  }
  const mblIncrease = () => {
    if (selectedOpt === 'Standard 30$') {
      setStdCount(stdCount + 1)
    } else {
      setBckCount(bckCount + 1)
    }
  }

  const mblDecrease = () => {
    if (selectedOpt === 'Standard 30$') {
      if (stdCount > 0) {
        setStdCount(stdCount - 1)
      }
    } else if (selectedOpt === 'Backstage 60$') {
      if (bckCount > 0) {
        setBckCount(bckCount - 1)
      }
    }
  }
  if (!eventData) {
    return <div>Event not found</div>
  }
  return (
    <div className="event-container">
      <div className="single-event">
        <h1 className="event-title">{eventData.name}</h1>
        <div className="event-image">
          <img src={eventData.url} alt={eventData.name} />
        </div>
        <div className="mobile-purchase">
          <h2>Tickets</h2>
          <div className="options">
            <select value={selectedOpt} onChange={handleOptChange}>
              <option className="choose">Choose a ticket</option>
              <option className="std">Standard {stdPrice}$</option>
              <option className="bck">Backstage {bckPrice}$</option>
            </select>
            <div className="mbl-btns">
              <button className="btn decrease" onClick={mblDecrease}>
                -
              </button>
              <span>
                Amount:
                {selectedOpt === 'Standard 30$'
                  ? stdCount
                  : selectedOpt === 'Backstage 60$'
                  ? bckCount
                  : ''}
              </span>
              <span>Total: {totalPrice}$</span>
              <button
                className="btn increase"
                onClick={
                  selectedOpt === 'Standard 30$' ||
                  selectedOpt === 'Backstage 60$'
                    ? mblIncrease
                    : null
                }
              >
                +
              </button>
            </div>
          </div>
          <button
            className={
              stdCount === 0 && bckCount === 0 ? 'disabled' : 'mbl-atc-btn'
            }
            disabled={stdCount === 0 && bckCount === 0}
            onClick={() => {
              if (!user) {
                document.querySelector('.no-user-error').style.display = 'block'
              } else {
                document.querySelector('.no-user-error').style.display = 'none'
                // Create a product object representing the selected event
                const product = {
                  name: eventData.name,
                  day: eventData.day,
                  date: eventData.date,
                  venue: eventData.venue,
                  price: selectedOpt === 'Standard 30$' ? stdPrice : bckPrice,
                  count: selectedOpt === 'Standard 30$' ? stdCount : bckCount,
                  url: eventData.url,
                  type:
                    selectedOpt === 'Standard 30$' ? 'Standard' : 'Backstage',
                }
                // Add the selected event to the cart
                addProductToCart(product)
              }
            }}
          >
            Add to Cart
          </button>
          <p className="no-user-error">You have to sign in first</p>
        </div>
        <div className="event-details">
          <div className="about-event">
            <h3>About</h3>
            <p className="venue">
              <FaLocationArrow size={'12px'}></FaLocationArrow>
              {'  '}
              {eventData.venue}
              <br />
              {eventData.date}
              <br />
              {eventData.hours}
            </p>
            {eventData.about}
            <div className="rules">
              <h3>Rules</h3>
              <p>
                Event has an age limit of 18 <br />
                For disabled enquiries please call Volkswagen Arena
                (+902123776700). <br />
                Sound in the venue may cause temporary hearing problems. <br />
                Lighting in the venue may cause temporary eye discomfort.
                <br />
                All audience must have their tickets with them during the event.
                <br /> Audience that exits the venue will need to purchase a new
                ticket in order to enter the venue again.
                <br /> Event tickets should only be purchased from official
                selling points determined by the promoter. <br />
                The promoter has a right to not allow the ticket holder if the
                ticket is not purchased from an official selling point. <br />
                The venue has a right to not allow any person if they seem
                unsuitable for the event, audience who are not allowed will
                receive a refund. <br /> No food or drinks are allowed in the
                venue. -If there is a tobacco sponsor- Open cigarette packs and
                tobacco will not be allowed in the venue.
              </p>
            </div>
            {/* Etkinlik hakkında bilgileri buraya ekleyin */}
          </div>
        </div>
      </div>
      <div className="add-to-cart">
        <div className="event-options">
          <div className="standard-options">
            <h3>Standard</h3>
            <p className="price">{stdPrice}$</p>
            <div className="buttons">
              <button className="btn decrease" onClick={decreaseStdCount}>
                -
              </button>
              <span className="standard-price">{stdCount}</span>
              <button
                className="btn increase"
                onClick={() => {
                  increaseStdCount()
                  setSelectedOpt('Standard 30$')
                }}
              >
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
              <button
                className="btn increase"
                onClick={() => {
                  increaseBckCount()
                  setSelectedOpt('Backstage 60$')
                }}
              >
                +
              </button>
            </div>
            <div className="total">Total: {totalPrice}$</div>

            <button
              className={
                stdCount === 0 && bckCount === 0 ? 'disabled' : 'buy-btn'
              }
              disabled={stdCount === 0 && bckCount === 0}
              onClick={() => {
                if (!user) {
                  document.querySelector('.no-user-error').style.display =
                    'block'
                } else {
                  document.querySelector('.no-user-error').style.display =
                    'none'
                  // Create a product object representing the selected event
                  const product = {
                    name: eventData.name,
                    day: eventData.day,
                    date: eventData.date,
                    venue: eventData.venue,
                    price: selectedOpt === 'Standard 30$' ? stdPrice : bckPrice,
                    count: selectedOpt === 'Standard 30$' ? stdCount : bckCount,
                    url: eventData.url,
                    type:
                      selectedOpt === 'Standard 30$' ? 'Standard' : 'Backstage',
                  }
                  // Add the selected event to the cart
                  addProductToCart(product)
                }
              }}
            >
              Add to Cart
            </button>
            <p className="no-user-error">You have to sign in first</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IEventPage
