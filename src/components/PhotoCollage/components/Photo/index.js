import React from 'react'
import cn from 'classnames'
import st from './style.module.css'

import Picture from '../../../Picture'

const Photo = (props) => {
  const file = props.image.file
  const deg = props.isEven ? +props.deg : +props.deg * -1

  return <div
    style={{transform: `rotate(${deg}deg)`}}
    className={cn(st.photo, props.className)}>
    <div className={st.image_wrapper}>
      <Picture
        className={st.image}
        sizes={{
          default: {w:302, h:302},
          '(max-width:1279px)': {w:304, h:304},
          '(max-width:1023px)': {w:280, h:280},
          '(max-width:767px)': {w:275, h:275},
          '(max-width:639px)': {w:423, h:423},
          '(max-width:479px)': {w:318, h:318},
        }}
        file={file} />
    </div>
    <div className={st.info}>
      <div className={st.title}>{props.title}</div>

      {props.date && props.time && <div className={st.date_time}>
        <span className={st.date}>{props.date}</span>
        <span className={st.time}>{props.time}</span>
      </div>}

      {props.price && <div className={st.price}>
        <span className={st.price}>{props.t({ ru: `${props.price} руб.`, en: `${props.price} rub` })}</span>
      </div>}
    </div>
  </div>
}

export default Photo
