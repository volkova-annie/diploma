import React from 'react'
// import Link from 'gatsby-link'
import cn from 'classnames'
import st from './style.module.css'

const GalleryTile = props => {
  return (
    <div className={st.tile}>
      <div className={st.image}>
        <img
          srcSet={props.image[0].responsiveResolution.srcSet}
          src={props.image[0].responsiveResolution.src} />
      </div>
      <span className={st.title}>{props.title}</span>
    </div>
  )
}

export default GalleryTile
