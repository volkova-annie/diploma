import React from 'react'
// import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

const MenuTile = props => {
  const t = props.t

  return (
    <div className={st.tile}>
      <div className={st.image}>
        <img
          srcSet={props.image.responsiveResolution.srcSet}
          src={props.image.responsiveResolution.src} />
      </div>
      <span className={st.title}>{props.title}</span>
      <span className={st.price}>{t({ ru: `${props.price} руб.`, en: `${props.price} rub` })}</span>

    </div>
  )
}

export default MenuTile
