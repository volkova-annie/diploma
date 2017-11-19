import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import Navbar from '../Navbar'
import Social from '../Social'
import Locale from '../Locale'
import Iconed from '../Iconed'
import st from './style.module.css'

const Header = props => (
  <header className={st.header}>
    <div className={st.top}>
      <div className={cn(st.fill, st.first)}>
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
        className={st.logo_wrapper}
        to="/">
        <Iconed
          className={st.logo}
          icon="logo" />
      </Link>

      <div className={cn(st.fill, st.last)}>
        <Social
          className={st.social}
          {...props} />
      </div>
    </div>

    <Navbar {...props} />
  </header>
)

export default Header
