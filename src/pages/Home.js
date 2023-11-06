import imgData from '../Data'
import Carousel from '../components/Carousel'
import '../styles/main.scss'

import Upcoming from '../components/Upcoming'
import { useEffect } from 'react'
import HotTickets from '../components/HotTickets'

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div>
        <Carousel data={imgData} />
        <HotTickets />
        <Upcoming />
      </div>
    </>
  )
}
export default Home
