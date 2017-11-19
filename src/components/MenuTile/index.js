import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

const MenuTile = props => {
  const locale = props.locale
  const t = props.t
  const item = props[locale]
  const date = new Date(item.date)

  return (
    <Link
      to={`/menu/${props.slug}`}
      className={st.tile}>
      {item.image.responsiveResolution && (
        <div className={st.image_container}>
          <img
            srcSet={item.image.responsiveResolution.srcSet}
            src={item.image.responsiveResolution.src} />
        </div>
      )}
      {!item.image.responsiveResolution && <div className={st.image_placeholder} />}
      <div className={st.info}>
        <span className={st.title}>{item.title}</span>
        <span className={st.price}>{t({ ru: `${item.price} руб.`, en: `${item.price} rub` })}</span>
      </div>
    </Link>
  )
}

export default MenuTile
