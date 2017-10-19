import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Locale from '../Locale'

const Navbar = props => {
  const { t } = props

  return (
    <ul className={st.navbar}>
      <li className={st.item}>
        <Link
          className={st.link}
          to="/events">
          {t({ ru: 'События', en: 'Events' })}
        </Link>
      </li>
      <li className={st.item}>
        <Link
          className={st.link}
          to="/gallery">
          {t({ ru: 'Галерея', en: 'Gallery' })}
        </Link>
      </li>
      <li className={st.item}>
        <Link
          className={st.link}
          to="/menu">
          {t({ ru: 'Меню', en: 'Menu' })}
        </Link>
      </li>
      <li className={st.item}>
        <Link
          className={st.link}
          to="/contacts">
          {t({ ru: 'Контакты', en: 'Contacts' })}
        </Link>
      </li>
      <li className={st.item}>
        <Locale {...props} />
      </li>
    </ul>
  )
}

export default Navbar
