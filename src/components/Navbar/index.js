import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Locale from '../Locale'

const Navbar = props => {
  const t = props.actions.translate
  const links = [
    {
      to: '/events',
      title: t({ ru: 'События', en: 'Events' }),
    },
    {
      to: '/gallery',
      title: t({ ru: 'Галерея', en: 'Gallery' }),
    },
    {
      to: '/menu',
      title: t({ ru: 'Меню', en: 'Menu' }),
    },
    {
      to: '/contacts',
      title: t({ ru: 'Контакты', en: 'Contacts' }),
    },
  ]

  return (
    <ul className={st.navbar}>
      {links.map(link => (
        <li
          key={link.to}
          className={st.item}>
          <Link
            activeClassName={st.active}
            className={st.link}
            to={link.to}>
            {link.title}
          </Link>
        </li>
      ))}

      <li className={st.item}>
        <Locale {...props} />
      </li>
    </ul>
  )
}

export default Navbar
