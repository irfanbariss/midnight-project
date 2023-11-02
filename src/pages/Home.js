import imgData from '../Data'
import Carousel from '../components/Carousel'
import '../styles/main.scss'

import ThisWeek from '../components/ThisWeek'
import Upcoming from '../components/Upcoming'

const Home = () => {
  return (
    <>
      <div>
        <Carousel data={imgData} />
        <ThisWeek />
        <Upcoming />
      </div>
      <div className="footer">
        <p>Developed by © Barış Özer. All Rights Reserved</p>
      </div>
    </>
  )
}
export default Home
