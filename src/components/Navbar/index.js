import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Locale from '../Locale'

const Navbar = () =>
  <ul className={st.navbar}>
    <li className={st.item}>
      <Link
        className={st.link}
        to='/events'>События
      </Link>
    </li>
    <li className={st.item}>
      <Link
        className={st.link}
        to='/gallery'>Галерея
      </Link>
    </li>
    <li className={st.item}>
      <Link
        className={st.link}
        to='/menu'>Меню
      </Link>
    </li>
    <li className={st.item}>
      <Link
        className={st.link}
        to='/contacts'>Контакты
      </Link>
    </li>
    <li className={st.item}>
      <Locale>
      </Locale>
    </li>
  </ul>

export default Navbar
