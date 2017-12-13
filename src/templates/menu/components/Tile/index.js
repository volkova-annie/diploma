import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

import Picture from '../../../../components/Picture'

const MenuTile = props => {
  const locale = props.locale
  const t = props.t
  const item = props[locale]
  const date = new Date(item.date)
  let sizes

  if (props.firstline) {
    sizes = {
      default: {w:579},
      '(max-width:1023px)': {w:459},
      '(max-width:767px)': {w:679},
      '(max-width:479px)': {w:399},
    }
  }
  else {
    sizes = {
      default: {w:281},
      '(max-width:1023px)': {w:459},
      '(max-width:767px)': {w:679},
      '(max-width:479px)': {w:399},
    }
  }

  return (
    <Link
      to={`/menu/${props.slug}`}
      className={st.tile}>
      {item.image.file && (
        <div className={st.image_container}>
          <Picture
            className={st.image}
            sizes={sizes}
            file={item.image.file} />
        </div>
      )}
      {!item.image.file && <div className={st.image_placeholder} />}
      <div className={st.info}>
        <span className={st.title}>{item.title}</span>
        <span className={st.price}>{t({ ru: `${item.price} руб.`, en: `${item.price} rub` })}</span>
      </div>
    </Link>
  )
}

export default MenuTile
