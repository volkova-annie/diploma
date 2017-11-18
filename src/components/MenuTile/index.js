import React from 'react'
// import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

const MenuTile = props => {
  const t = props.t

  return (
    <div className={st.tile}>
      {props.image.responsiveResolution && (
        <div className={st.image_container}>
          <img
            srcSet={props.image.responsiveResolution.srcSet}
            src={props.image.responsiveResolution.src} />
        </div>
      )}
      {!props.image.responsiveResolution && <div className={st.image_placeholder} />}
      <div className={st.info}>
        <span className={st.title}>{props.title}</span>
        <span className={st.price}>{t({ ru: `${props.price} руб.`, en: `${props.price} rub` })}</span>
      </div>
    </div>
  )
}

export default MenuTile
