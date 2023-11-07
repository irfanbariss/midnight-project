import { useCallback, useState, useEffect } from 'react'
import '../styles/carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)

  const nextSlide = useCallback(() => {
    setSlide((slide + 1) % data.length)
  }, [slide, data]) // useCallback içinde kullanılan bağımlılıkları ekledik

  const prevSlide = useCallback(() => {
    setSlide((slide - 1 + data.length) % data.length)
  }, [slide, data])

  useEffect(() => {
    let timer

    if (autoSlide) {
      timer = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [autoSlide, slide, nextSlide])

  const handleMouseEnter = () => {
    setAutoSlide(false) // Mouse üzerine gelindiğinde otomatik geçişi devre dışı bırak
  }

  const handleMouseLeave = () => {
    setAutoSlide(true) // Mouse üzerinden çekildiğinde otomatik geçişi tekrar aktif hale getir
  }

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BsArrowLeftCircleFill className="arr arr-left" onClick={prevSlide} />
        {data.map((img, idx) => {
          return (
            <Link to={`/event/${img.name}`} key={idx}>
              <img
                src={img.url}
                alt={img.name}
                key={idx}
                className={slide === idx ? 'slide' : 'slide slide-hidden'}
                loading="lazy"
              />
            </Link>
          )
        })}
        <BsArrowRightCircleFill className="arr arr-right" onClick={nextSlide} />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx ? 'indicator' : 'indicator indicator-inactive'
                }
              ></button>
            )
          })}
        </span>
      </div>
    </div>
  )
}
export default Carousel
