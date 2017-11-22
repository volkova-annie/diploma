import React from 'react'
import st from './style.module.css'

const Presentation = ({item}) => {
  if (item.image.length > 0  && item.image[0].responsiveResolution) {
    return <img
      srcSet={item.image[0].responsiveResolution.srcSet}
      src={item.image[0].responsiveResolution.src} />
  }
  else {
    return null
  }
}

export default Presentation
