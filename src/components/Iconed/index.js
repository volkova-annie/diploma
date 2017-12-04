import React from 'react'
import cn from 'classnames'
import st from './style.module.css'
import { Sprite, Icon } from '../SVGIcon'

const Iconed = props => {
  const {title, subtitle, icon, className, iconClassName, onClick, link} = props

  if (link) {
    return (
      <a
        className={cn(className, st.iconed, st.action)}
        href={link}
        target="_blank">
        <Icon
          iconClassName={iconClassName}
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
          iconClassName={iconClassName}
          className={st.icon}
          icon={icon} />
        {title && <p className={st.iconed_title}>{title}</p>}
        {subtitle && <p className={st.iconed_text}>{subtitle}</p>}
      </span>
    )
  }
}

export default Iconed
