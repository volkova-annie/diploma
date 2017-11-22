import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import { getTime, getDate } from '../../../../modules/date'
import st from './style.module.css'

const Tile = props => {
  const locale = props.locale
  const t = props.t
  const item = props[locale]
  const date = new Date(item.date)

  return (
    <Link
      to={`/events/${props.slug}`}
      className={st.tile}>
      {item.image.responsiveResolution && (
        <div className={st.image_container}>
          <img
            className={st.image}
            srcSet={item.image.responsiveResolution.srcSet}
            src={item.image.responsiveResolution.src} />
        </div>
      )}
      {!item.image.responsiveResolution && <div className={st.image_placeholder} />}
      <div className={st.info}>
        <span className={st.time}>
          {t({
            ru: `${getDate(date).ru} в ${getTime(date)}`,
            en: `${getDate(date).en} at ${getTime(date)}`,
          })}
        </span>
        <span className={st.title}>{item.title}</span>
      </div>
    </Link>
  )
}

export default Tile
