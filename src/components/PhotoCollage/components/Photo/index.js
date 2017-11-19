import React from 'react'
import cn from 'classnames'
import st from './style.module.css'

const Photo = (props) => {
  const image = props.image.responsiveResolution
  const deg = props.isEven ? +props.deg : +props.deg * -1

  return <div
    style={{transform: `rotate(${deg}deg)`}}
    className={cn(st.photo, props.className)}>
    <div className={st.image_wrapper}>
      <img
        className={st.image}
        src={image.src}
        srcSet={image.srcSet} />
    </div>
    <div className={st.text}>
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
