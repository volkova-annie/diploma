import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'
import { Sprite, Icon } from '../SVGIcon'

const Iconed = props => {
  const {title, subtitle, icon, className, onClick, link} = props

  if (link) {
    return (
      <a
        className={cn(className, st.iconed, st.action)}
        href={link}
        target="_blank">
        <Icon
          className={st.icon}
          icon={icon} />
        {title && <p className={st.iconed_title}>{title}</p>}
        {subtitle && <p className={st.iconed_text}>{subtitle}</p>}
      </a>
    )
  } else {
    return (
      <span
        onClick={onClick}
        className={cn(className, st.iconed, {[st.action]: !!onClick})}>
        <Icon
          className={st.icon}
          icon={icon} />
        {title && <p className={st.iconed_title}>{title}</p>}
        {subtitle && <p className={st.iconed_text}>{subtitle}</p>}
      </span>
    )
  }
}

export default Iconed
