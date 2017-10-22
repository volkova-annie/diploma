import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'
import { Sprite, Icon } from '../SVGIcon'

const Iconed = props => {
  if (props.link) {
    return (
      <a
        className={cn(props.className, st.iconed, st.action)}
        href={props.link}
        target="_blank">
        <Icon
          className={st.icon}
          icon={props.icon} />
        <p className={st.iconed_title}>{props.title}</p>
        <p className={st.iconed_text}>{props.subtitle}</p>
      </a>
    )
  } else {
    return (
      <span
        onClick={props.onClick}
        className={cn(props.className, st.iconed, {[st.action]: !!props.onClick})}>
        <Icon
          className={st.icon}
          icon={props.icon} />
        <p className={st.iconed_title}>{props.title}</p>
        <p className={st.iconed_text}>{props.subtitle}</p>
      </span>
    )
  }
}

export default Iconed
