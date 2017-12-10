import React from 'react'
import st from './style.module.css'
import Picture from '../../../../components/Picture'

const Presentation = ({item}) => {
  if (item.image.file) {
    return <Picture
      className={st.picture}
      sizes={{
        default: {w:360},
        '(max-width: 1023px)': {w: 380},
        '(max-width: 767px)': {w: 690},
        '(max-width: 479px)': {w: 430},
        '(min-width: 320px)': {w: 290},
      }}
      file={item.image.file} />
  }
  else {
    return null
  }
}

export default Presentation
