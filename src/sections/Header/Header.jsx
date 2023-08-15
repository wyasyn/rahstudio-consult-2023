import './Header.scss'
import { Fragment } from 'react'
import {Hero, NavBar, TopFooter} from '../../components'

function Header() {
  return (
    <Fragment id='home'>
    <TopFooter />
    <NavBar />
    <Hero />
    </Fragment>
  )
}

export default Header