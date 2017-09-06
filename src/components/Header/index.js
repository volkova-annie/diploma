import React from 'react'
import Navbar from '../Navbar'
import Social from '../Social'
import Locale from '../Locale'
import Link from 'gatsby-link'
import st from './style.module.css'

const Header = () =>
  <header className={st.header}>
    <div className={st.top}>
      <Social></Social>
      {/* <Locale></Locale> */}
    </div>
    <Navbar></Navbar>
  </header>

export default Header
