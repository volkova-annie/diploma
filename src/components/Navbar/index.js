import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'
import Locale from '../Locale'

const Navbar = props => {
  const t = props.actions.translate
  const linksFirst = [
    {
      to: '/events',
      title: t({ ru: 'События', en: 'Events' }),
    },
    {
      to: '/menu',
      title: t({ ru: 'Меню', en: 'Menu' }),
    },
  ]
  const linksLast = [
    {
      to: '/contacts',
      title: t({ ru: 'Контакты', en: 'Contacts' }),
    },
  ]

  return (
    <ul className={cn(st.navbar, props.className)}>
      <div className={st.first}>
        {linksFirst.map(link => (
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
      </div>
      <div className={st.center}>
      </div>
      <div className={st.last}>
        {linksLast.map(link => (
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
      </div>
    </ul>
  )
}

export default Navbar
