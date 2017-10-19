import React from 'react'
import Navbar from '../Navbar'
import Social from '../Social'
import Locale from '../Locale'
import Link from 'gatsby-link'
import Iconed from '../Iconed'
import Phone from '../Phone'
import st from './style.module.css'

const Header = props => (
  <header className={st.header}>
    <div className={st.top}>
      <Phone />
      <Iconed
        className={st.logo}
        icon="cuba"
        title="Cuba-bar"
        subtitle="" />
      <Social />
    </div>
    <Navbar {...props} />
  </header>
)

export default Header
