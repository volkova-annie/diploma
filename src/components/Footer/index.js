import React from 'react'
import Social from '../Social'
import Link from 'gatsby-link'
import st from './style.module.css'

const Footer = () =>
  <footer className={st.footer}>
    <div className={st.top}>
      <Social></Social>
      {/* <Address></Address> */}
    </div>
  </footer>

export default Footer
