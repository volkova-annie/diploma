import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../Navbar'
import Social from '../Social'
import Locale from '../Locale'
import Iconed from '../Iconed'
import st from './style.module.css'

const Header = props => (
  <header className={st.header}>
    <div className={st.top}>
      <div
        className={st.fill}
        style={{ textAlign: 'left' }}>
        <a
          className={st.phone}
          href="tel:+79211233456">
          <Iconed
            className={st.call}
            icon="call" />
          <span className={st.number}>+7 (921) 123-34-56</span>
        </a>
      </div>

      <Link
        to="/"
        className={st.logo} />

      <div
        className={st.fill}
        style={{ textAlign: 'right' }}>
        <Social
          className={st.social}
          {...props} />
      </div>
    </div>

    <Navbar {...props} />
  </header>
)

export default Header
