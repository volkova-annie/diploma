import React from 'react'
import st from './style.module.css'
import Picture from '../../../../components/Picture'

const Presentation = ({item}) => {
  if (item.image.file) {
    return <Picture
      sizes={{default: {w:640}}}
      file={item.image.file} />
  }
  else {
    return null
  }
}

export default Presentation
