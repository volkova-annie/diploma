import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import Navbar from '../Navbar'
import Social from '../Social'
import Locale from '../Locale'
import Iconed from '../Iconed'
import Logo from '../Logo'
import st from './style.module.css'

const Header = props => (
  <header className={st.header}>
    <div className={st.top}>
      <Link
        className={st.logo_wrapper}
        to="/">
        <Logo />
      </Link>
    </div>

    <Navbar
      className={st.nav}
      {...props} />
  </header>
)

export default Header
