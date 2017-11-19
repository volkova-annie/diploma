import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

const GalleryTile = props => {
  const locale = props.locale
  const t = props.t
  const item = props[locale]

  return (
    <Link
      to={`/gallery/${props.slug}`}
      className={st.tile}>
      <div className={st.image}>
        <img
          srcSet={item.image[0].responsiveResolution.srcSet}
          src={item.image[0].responsiveResolution.src} />
      </div>
      <span className={st.title}>{item.title}</span>
    </Link>
  )
}

export default GalleryTile
