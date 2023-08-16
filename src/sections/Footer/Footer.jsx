import { MdArchitecture } from 'react-icons/md'
import { FaDribbble, FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa'
import './Footer.scss'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="footer-container container">
            <div className="logo">
                <a href='#' className='flex'>
                        <div className="logo center">
                            <MdArchitecture />
                        </div>
                        <div className="title flex">
                            <div className="name">
                                RAHSTUIO
                            </div>
                            <div className="sub-name">
                                CONSULTS & CONSTRUCTION
                            </div>
                        </div>
                </a>
            </div>
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
            <p className="copy-right">
                &copy; {currentYear} RAHSTUDIO by <a className='author' href="https://ywalum.com/" target='_blank' rel='noreferrer'>Yasin Walum</a>. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer