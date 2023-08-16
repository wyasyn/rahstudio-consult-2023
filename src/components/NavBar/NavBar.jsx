import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.scss'
import { MdArchitecture } from 'react-icons/md'
import { useState } from 'react'

function NavBar() {
    const [ open, setOpen ] = useState(false);
    const openMenu = () => {
        setOpen(true)
    };
    const closeMenu = () => {
        setOpen(false)
    };
  return (
    <nav className="nav-bar">
        <div className="nav-bar-container container">
            <div className="logo-bar flex">
                <div className="logo-container">
                    <h1 className='flex'>
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
                    </h1>
                </div>
                <div className="logo-cta">
                    <a href="#contact" className="btn">Contact Us</a>
                    <div className="menu" onClick={openMenu}>
                        <FaBars />
                    </div>
                </div>
            </div>
            <div className={ open ? "nav-menu open center" : "nav-menu center" }>
                <div className="close" onClick={closeMenu}>
                    <FaTimes />
                </div>
                <ul className='nav-list center'>
                {
                    [ "home", "about", "projects", "services", "testimonials", "blog", "contact" ].map((data, index) => (
                        <li key={index} className='nav-item'>
                            <a href={`#${data}`} className='nav-link' onClick={closeMenu} >{data}</a>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar