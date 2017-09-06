import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import {Sprite, Icon} from '../SVGIcon'

const Iconed = (props) => {
  if (props.link) {
    return <a className={st.iconed} href={props.link} target='_blank'>
      <Icon className={st.icon} icon={props.icon} />
      <p className={st.iconed_title}>{props.title}</p>
      <p className={st.iconed_text}>{props.subtitle}</p>
    </a>
  }
  else {
    return <span className={st.iconed}>
      <Icon className={st.icon} icon={props.icon} />
      <p className={st.iconed_title}>{props.title}</p>
      <p className={st.iconed_text}>{props.subtitle}</p>
    </span>
  }
}

export default Iconed
