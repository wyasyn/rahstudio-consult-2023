import './TopFooter.scss'
import { FaDribbble, FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa'

function TopFooter() {
  return (
    <footer className='top-footer'>
      <div className="top-footer-container container flex">
      <p>Inspiring design justified</p>
      <div className="socials flex">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaPinterest />
        </a>
        <a href="#">
          <FaDribbble />
        </a>
      </div>
      </div>
    </footer>
  )
}

export default TopFooter