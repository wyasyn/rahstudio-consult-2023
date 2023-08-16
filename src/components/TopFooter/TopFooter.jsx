import './TopFooter.scss'
import { FaDribbble, FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa'

function TopFooter() {
  return (
    <footer className='top-footer'>
      <div className="top-footer-container container flex">
      <p>Inspiring design justified</p>
      <div className="socials flex">
        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
          <FaInstagram />
        </a>
        <a href="https://www.pinterest.com/" target='_blank' rel='noreferrer'>
          <FaPinterest />
        </a>
        <a href="https://www.dribbble.com/" target='_blank' rel='noreferrer'>
          <FaDribbble />
        </a>
      </div>
      </div>
    </footer>
  )
}

export default TopFooter