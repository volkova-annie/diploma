import React from 'react'
import Link from 'gatsby-link'
import st from './style.module.css'
import Image from '../Image'

const Poster = (props) => {
  if (props.link) {
    return <a className={st.poster} href={props.link} target='_blank'>
      <Image className={st.img} src={props.img} />
      <p className={st.img_title}>{props.title}</p>
      <p className={st.img_text}>{props.subtitle}</p>
    </a>
  }
  else {
    return <span className={st.poster}>
      <img className={st.img} src={props.img} />
      <p className={st.img_title}>{props.title}</p>
      <p className={st.img_text}>{props.subtitle}</p>
    </span>
  }
}

export default Poster
