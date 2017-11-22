import React from 'react'
import st from './style.module.css'

const Presentation = ({item}) => {
  if (item.image.responsiveResolution) {
    return <img
      srcSet={item.image.responsiveResolution.srcSet}
      src={item.image.responsiveResolution.src} />
  }
  else {
    return null
  }
}

export default Presentation
