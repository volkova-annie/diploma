import React from 'react'
// import Link from 'gatsby-link'
import cn from 'classnames'
import {getTime, getDate} from '../../modules/date'
import st from './style.module.css'

const EventTile = props => {
  const date = new Date(props.date)
  const t = props.t

  return (
    <div className={st.tile}>
      <div className={st.image}>
        <img
          srcSet={props.image.responsiveResolution.srcSet}
          src={props.image.responsiveResolution.src} />
      </div>
      <span className={st.time}>{t({ ru: `${getDate(date).ru} в ${getTime(date)}`, en: `${getDate(date).en} at ${getTime(date)}` })}</span>
      <span className={st.title}>{props.title}</span>
    </div>
  )
}

export default EventTile
